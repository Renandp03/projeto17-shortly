import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateSignUp } from "../middlewares/validateSignUp.js";
import { validateSignIn } from "../middlewares/validateSignIn.js";
import signUpSchema from "../schema/signUpSchema.js";
import signInSchema from "../schema/signInSchema.js";
import { signIn, signUp, userMe } from "../controllers/signControllers.js";
import { auth } from "../middlewares/auth.js";


const signRouter = Router()



signRouter.post("/signup",validateSchema(signUpSchema),validateSignUp, signUp)
signRouter.post("/signin",validateSchema(signInSchema), validateSignIn, signIn)
signRouter.get("/users/me",auth,userMe)


export default signRouter