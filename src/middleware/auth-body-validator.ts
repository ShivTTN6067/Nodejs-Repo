import { Request, Response, NextFunction } from 'express';
import { authSchema } from '../validator/schema';

export const bodyValidator = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await authSchema.validateAsync(req.body);
		next();
	} catch (err) {
		res.statusCode = 400;
		res.json({
			error: 'body is not validate'
		});
	}
};
