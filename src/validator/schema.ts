import Joi from 'joi';

export const userSchema = Joi.object({
	name: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),
	class: Joi.number()
		.integer(),
});

export const authSchema = Joi.object({
	userName: Joi.string()
		.alphanum()
		.min(3)
		.max(30)
		.required(),
	password: Joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
		.required()
		.messages({
			'string.pattern.base': 'Password should be between 3 to 30 characters and contain letters or numbers only',
			'string.empty': 'Password cannot be empty',
			'any.required': 'Password is required',
		}),
});


export const paramsSchema = Joi.object({
	id: Joi.string()
		.alphanum()
		.required()
});

