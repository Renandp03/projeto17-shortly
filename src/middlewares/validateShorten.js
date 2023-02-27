import { db } from "../config/database.js";

export async function validateShorten(req,res,next){
    try {

        const { Authorization } = req.headers
        const token = Authorization?.replace("Bearer ", "");

        const {rows:session} = await db.query("SELECT * FROM sessions WHERE token=$1",[token]);

        if(!Authorization || !session[0]) return res.status(401).send("Não autorizado.");

        
    } catch (error) {
        res.status(500).send("Problemas no servidor")
        
    }
    next()
}