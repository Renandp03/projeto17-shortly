import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signUp } from "../controllers/signControllers.js";

const signRouter = Router()



signRouter.post("/signup",signUp)


export default signRouter