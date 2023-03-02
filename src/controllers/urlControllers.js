import { db } from "../config/database.js";
import { nanoid } from "nanoid"


export async function shorten(req,res){

    try {

        const { userId } = req.session;

        const { url } = req.body;

        const shortUrl = nanoid(10);

        const { rows:user } = await db.query(`SELECT * FROM users WHERE id = $1`,[userId])

        const count = user[0].linksCount+1

        await db.query(`UPDATE users SET "linksCount" = "linksCount" + 1 WHERE id = $1`,[userId])

        await db.query(`INSERT INTO shorts ("userId","shortUrl", url) VALUES ($1,$2,$3)`,[userId,shortUrl,url]);

        const {rows:result} =  await db.query(`SELECT id,"shortUrl" FROM shorts WHERE "shortUrl" = $1`, [shortUrl]);

        res.status(201).send(result[0]);

        
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export async function getUrl(req,res){

    try {
        
        const id = req.id;

        const { shortUrl, url } = req.url;

        res.status(200).send({id,shortUrl,url});

    } catch (error) {
        res.status(500).send(error.message);
    }

}

export async function openShortUrl(req,res){

    try {

        const { id,userId,url } = req.short;

        await db.query(`UPDATE shorts set "visitCount" = "visitCount" + 1 WHERE id = $1`,[id]);

        await db.query(`UPDATE users set "visitCount" = "visitCount" + 1 WHERE id = $1`,[userId]);

        res.status(302).setHeader("location",url).send();

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deleteShortUrl(req,res){
    
    try {
        
        const { id } = req.params;

        await db.query(`DELETE FROM shorts WHERE id = $1`, [id]);

        res.status(204).send("deletado");

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getRanking(req,res){

    try {
        
        const {rows:ranking} = await db.query(`SELECT id, name, "linksCount","visitCount"
                                                FROM users
                                                ORDER BY "visitCount" DESC, name
                                                LIMIT 10 `);

        res.status(200).send(ranking);

    } catch (error) {
        res.status(500).send(error.message)
    }
}