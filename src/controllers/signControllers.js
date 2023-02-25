import { db } from "../config/database.js";

export async function signUp(req,res){

    try {
        
        const { name, email, password } = req.body

        await db.query(`INSERT INTO users (name,email,password) VALUES ($1,$2,$3)`,[name,email,password])

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function signIn(req,res){

    try {
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }

}