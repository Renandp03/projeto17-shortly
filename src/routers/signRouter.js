import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import signUpSchema from "../schema/signUpSchema.js";
import { signUp } from "../controllers/signControllers.js";
import signInSchema from "../schema/signInSchema.js";

const signRouter = Router()



signRouter.post("/signup",validateSchema(signUpSchema), signUp)
signRouter.post("/signin",validateSchema(signInSchema), )


export default signRouter