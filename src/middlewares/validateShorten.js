import { db } from "../config/database.js";

export async function validateShorten(req,res,next){
    try {

        const { authorization } = req.heaters
        const token = authorization?.replace("Beares ", "");

        const {rows:session} = db.query("SELECT * FROM sessions WHERE token=$1",[token])

        if(!authorization || !token[0]) return res.status(401).send("Não autorizado.")

        
    } catch (error) {
        res.status(500).send("Problemas no servidor")
        
    }
    next()
}