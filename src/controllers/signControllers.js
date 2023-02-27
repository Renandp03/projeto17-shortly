import { db } from "../config/database.js";
import {v4 as uuid} from "uuid";
import bcrypt from "bcrypt";

export async function signUp(req,res){

    try {
        
        const { name, email, password } = req.body;

        const hashPassword = bcrypt.hashSync(password,10)

        await db.query(`INSERT INTO users (name,email,password) VALUES ($1,$2,$3)`,[name,email,hashPassword]);

        res.status(201).send("ok")

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function signIn(req,res){

    try {

        const { email, password } = req.body

        const token = uuid()

        await db.query(`DELETE FROM sessions WHERE email = $1`, [email])

        await db.query("INSERT INTO sessions (email,token) VALUES ($1,$2)",[email,token])

        res.status(200).send({token})
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }

}
