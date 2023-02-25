import Joi from "joi";

const signInSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().min(5).required()
})

export default signInSchema