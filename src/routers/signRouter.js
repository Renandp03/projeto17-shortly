import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateSignUp } from "../middlewares/validateSignUp.js";
import { validateSignIn } from "../middlewares/validateSignIn.js";
import signUpSchema from "../schema/signUpSchema.js";
import signInSchema from "../schema/signInSchema.js";
import { signIn, signUp } from "../controllers/signControllers.js";


const signRouter = Router()



signRouter.post("/signup",validateSchema(signUpSchema),validateSignUp, signUp)
signRouter.post("/signin",validateSchema(signInSchema), validateSignIn, signIn)


export default signRouter