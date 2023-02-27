import { db } from "../config/database.js";
import { nanoid } from "nanoid"


export async function shorten(req,res){

    try {

        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");

        const {rows:id} = await db.query(`SELECT "userId" FROM sessions WHERE token = $1`,[token]);

        const { url } = req.body;

        const shortUrl = nanoid(10);

        await db.query(`INSERT INTO shorts ("userId","shortUrl", url) VALUES ($1,$2,$3)`,[id[0].userId,shortUrl,url]);

        const {rows:result} =  await db.query(`SELECT id,"shortUrl" FROM shorts WHERE "shortUrl" = $1`, [shortUrl]);

        res.status(201).send(result[0]);

        
    } catch (error) {
        res.status(500).send(error.message)
    }

}

export async function GetUrl(req,res){

    try {
        
        const id = req.id

        const { shortUrl, url } = req.url

        res.send({id,shortUrl,url})

    } catch (error) {
        res.status(500).send(error.message)
    }

}