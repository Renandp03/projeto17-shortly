import Joi from "joi";

const signUpSchema = Joi.object({
    name:Joi.string().min(2),
    email:Joi.email(),
    password:Joi.string().min(5)
})

export default signUpSchema