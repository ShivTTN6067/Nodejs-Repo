import { Request, Response, NextFunction, Errback, Router } from 'express';

export const authChecker = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['authorization']?.split(' ')[1] === process.env.ACCESSCODE) {
        return next();
    }
    res.status(401).send({
        msg: "Invalid credentials",
    })
}