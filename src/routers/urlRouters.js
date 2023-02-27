import { Router } from "express";
import { shorten } from "../controllers/urlControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateShorten } from "../middlewares/validateShorten.js"
import shortenSchema from "../schema/shortenSchema.js";


const urlRouter = Router();

urlRouter.post("/url/shorten",validateSchema(shortenSchema),validateShorten,shorten);



export default urlRouter;