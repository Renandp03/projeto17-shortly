import { db } from "../config/database.js";

export async function validateSignUp(req,res,next){
    try {

        const { name, email, password, confirmPassword} = req.body;

        if(!name || !email || !password) return res.status(422).send("preencha todos os campos.")

        if(password !== confirmPassword) return res.status(422).send("confirme a senha corretamente.")


        
    } catch (error) {
        res.status(500).send("Problemas no servidor")
    }
}