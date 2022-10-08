import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
    class: Joi.number(),
});

