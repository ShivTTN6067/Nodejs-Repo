import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import { userSchema, paramsSchema } from '../validator/schema';

export const bodyValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await userSchema.validateAsync(req.body);
		next();
	} catch (err) {
		res.statusCode = 400;
		res.json({
			error: 'body is not validate'
		});
	}
};

export const paramsValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if(!isValidObjectId(req.params.id)){
			throw new Error('wronge id');
		}
		req.params = await paramsSchema.validateAsync(req.params);
		next();
	} catch (err) {
		res.statusCode = 400;
		res.json({
			error: 'params are not validate'
		});
	}
};