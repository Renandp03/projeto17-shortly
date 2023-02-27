import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import signRouter from "./routers/signRouters.js"
import urlRouter from "./routers/urlRouters.js"

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())
app.use([signRouter,urlRouter])

const PORT = process.env.PORT

app.listen(PORT,() => console.log(`rodando na porta ${PORT}`))