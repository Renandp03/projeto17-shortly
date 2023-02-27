import Joi from "joi";

const signInSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password:Joi.string().min(5).required()
})

export default signInSchema