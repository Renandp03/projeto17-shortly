import Joi from "joi";

const signUpSchema = Joi.object({
    name:Joi.string().min(2).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password:Joi.string().min(5).required(),
    confirmPassword:Joi.string().min(5).required()
})

export default signUpSchema