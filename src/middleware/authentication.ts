import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt-utils';

export const authChecker = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (req && req?.headers && req?.headers['authorization']?.split(' ')[1]) {
			await verifyToken(req?.headers['authorization']?.split(' ')[1]);
			next();
		}
	} catch (err) {
		console.error(err);
		res.statusCode = 401;
		res.json({
			error: 'Missing JWT token from the \'Authorization\' header'
		});
	}
};
