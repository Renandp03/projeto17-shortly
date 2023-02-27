import { db } from "../config/database.js";

export async function validateOpenShortUrl(req,res,next){
    try {

        const { shorturl } = req.params;

        const {rows:short} = await db.query(`SELECT * FROM shorts WHERE "shortUrl" = $1`,[shorturl]); 

        if(!short[0]) return res.status(404).send("shortUrl não encontrada");

        req.short = short[0]

        
    } catch (error) {
        res.status(500).send("Problemas no servidor")
        
    }
    next()
}