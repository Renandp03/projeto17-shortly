import { db } from "../config/database.js";

export async function auth(req,res,next){
    try {

        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");

        const {rows:session} = await db.query("SELECT * FROM sessions WHERE token=$1",[token]);

        if(!session[0]) return res.status(401).send("Não autorizado.");

        req.session = session[0];

        
    } catch (error) {
        res.status(500).send("Problemas no servidor");
        
    }
    next()
}