import { Router } from "express";
import { shorten, getUrl, openShortUrl, deleteShortUrl } from "../controllers/urlControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { auth } from "../middlewares/auth.js"
import { validateGetUrl } from "../middlewares/validateGetUrl.js";
import { validateOpenShortUrl } from "../middlewares/validateOpenShortUrl.js";
import { validateDeleteUrl } from "../middlewares/validateDeletUrl.js";
import shortenSchema from "../schema/shortenSchema.js";


const urlRouter = Router();

urlRouter.post("/urls/shorten",validateSchema(shortenSchema),auth,shorten);
urlRouter.get("/urls/:id",validateGetUrl,getUrl);
urlRouter.get("/urls/open/:shorturl",validateOpenShortUrl, openShortUrl);
urlRouter.delete("/urls/:id",auth,validateDeleteUrl,deleteShortUrl);



export default urlRouter