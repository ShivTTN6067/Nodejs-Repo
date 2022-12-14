import Joi from "joi";

export const userSchema = Joi.object({
	id: Joi.string()
		.alphanum()
		.required(),
	name: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),
	class: Joi.number()
		.integer(),
});


export const paramsSchema = Joi.object({
	id: Joi.string()
		.alphanum()
		.required()
});

