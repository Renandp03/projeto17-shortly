import { db } from "../config/database.js";
import { nanoid } from "nanoid"


export async function shorten(req,res){

    try {

        const { url } = req.body

        const shortUrl = nanoid(url)

        await db.query(`INSERT INTO shorts ("shortUrl", url) VALUES ($1,$2)`,[shortUrl,url])

        const result =  await db.query(`SELECT id,"shortUrl" FROM shorts WHERE "shortUrl" = $1`, [shortUrl])

        res.status(201).send(result)

        
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}