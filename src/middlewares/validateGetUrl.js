import { db } from "../config/database.js";

export async function validateGetUrl(req,res,next){
    try {

        const { id } = req.params;

        const {rows:url} = await db.query(`SELECT * FROM shorts WHERE id = $1`,[id]);

        if(!url[0]) return res.status(404).send("URL não encontrada");

        req.id = id;

        req.url = url[0];
        
    } catch (error) {
        res.status(500).send("Problemas no servidor");
        
    }
    next()
}