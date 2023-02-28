import { db } from "../config/database.js";

export async function validateDeleteUrl(req,res,next){
    try {

        const { id } = req.params;

        const { userId } = req.session;

        const {rows:short} = await db.query(`SELECT * FROM shorts WHERE id = $1`, [id]);

        if(!short[0]) return res.status(404).send("Short não encontrado.");

        if(short[0].userId !== userId) return res.status(401).send("Não autorizado para esse id.");
        
    } catch (error) {
        res.status(500).send("Problemas no servidor");
        
    }
    next()
}