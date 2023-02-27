import Joi from "joi";

const shortenSchema = Joi.object({
    url:Joi.string().uri()
})

export default shortenSchema