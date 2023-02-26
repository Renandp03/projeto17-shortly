import { db } from "../config/database.js";

export async function validateSignUp(req,res,next){
    try {

        const { name, email, password, confirmPassword} = req.body;

        if(!name || !email || !password || !confirmPassword) return res.status(422).send("preencha todos os campos.")

        if(password !== confirmPassword) return res.status(422).send("confirme a senha corretamente.")

        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email])

        if(user) return res.status(409).send("Email inválido.")


        
    } catch (error) {
        res.status(500).send("Problemas no servidor")
    }
    next()
}