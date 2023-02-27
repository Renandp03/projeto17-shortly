import { Router } from "express";
import { shorten, GetUrl } from "../controllers/urlControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateShorten } from "../middlewares/validateShorten.js"
import { validateGetUrl } from "../middlewares/validateGetUrl.js";
import shortenSchema from "../schema/shortenSchema.js";


const urlRouter = Router();

urlRouter.post("/urls/shorten",validateSchema(shortenSchema),validateShorten,shorten);
urlRouter.get("/url/:id",validateGetUrl, GetUrl)



export default urlRouter;