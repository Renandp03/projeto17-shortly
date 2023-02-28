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

        const { email } = req.body

        const token = uuid()

        const {rows : user} = await db.query(`SELECT * FROM users WHERE email = $1`,[email])

        await db.query(`DELETE FROM sessions WHERE "userId" = $1`, [user[0].id])

        await db.query(`INSERT INTO sessions ("userId",token) VALUES ($1,$2)`,[user[0].id,token])

        res.status(200).send({token})
        
    } catch (error) {
        res.status(500).send(error.message)
        
    }

}

export async function userMe(req,res){

    try {

        const { userId } = req.session;

        const { rows:userLinks } = await db.query(`SELECT * FROM shorts WHERE "userId" = $1`,[userId]);

        let visitCount = 0;

        userLinks.map((l) => visitCount += l.visitCount);

        const {rows:dataUser} = await db.query(`SELECT * FROM users WHERE id = $1`,[userId]);

        const { id, name } = dataUser[0];

        const dataLinks = [];

        userLinks.map((l) => dataLinks.push({id:l.id,shortUrl:l.shortUrl,url:l.url,visitCount:l.visitCount}));

        const result = { id,name,visitCount,shortenedUrls: dataLinks};

        res.status(200).send(result);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}