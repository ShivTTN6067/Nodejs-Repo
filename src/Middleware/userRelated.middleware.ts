import { Request, Response, NextFunction, Errback, Router } from 'express';

export const authChecker = (req: Request, res: Response, next: NextFunction) => { 
    console.log("fvjfehb",req.headers);
    if(req.headers.accescode === "123321123"){
        return next();
    } 
    res.status(401).send({
        msg : "Invalid credentials",
    })
}