import { Request, Response, NextFunction } from "express";

export const authChecker = (req: Request, res: Response, next: NextFunction) => {
	if (req && req?.headers["authorization"]?.split(" ")[1] === process.env.ACCESSCODE) {
		return next();
	}
	res.statusCode = 401;
	res.json({
		error: "Missing JWT token from the 'Authorization' header"
	});
};