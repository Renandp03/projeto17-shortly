import { db } from "../config/database.js";
import bcrypt from "bcrypt";

export async function validateSignIn(req,res,next){
    try {

        const { email, password } = req.body;

        if(!email || !password) return res.status(422).send("preencha todos os campos.");

        const {rows:user} = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if(!user[0]) return res.status(404).send("usuario não encontrado.")

        const confirmPassword = bcrypt.compareSync(password,user[0].password);

        if(!confirmPassword) return res.status(422).send("Dados inválidos");

        
    } catch (error) {
        res.status(500).send("Problemas no servidor")
    }
    next()
}