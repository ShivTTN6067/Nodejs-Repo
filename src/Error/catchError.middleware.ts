import { Request, Response, NextFunction, Errback } from 'express';

/**
 * Catch error when any controller throws an error
 *
 * @param controllerFunction - Object - Express request object
 *
 * @returns {void}
 */
export const errorCatcher = (controllerFunction: Function)=>{
    return (req: Request, res: Response, next: NextFunction) => {
        try{
            controllerFunction(req,res,next);
        }catch(err){
            next(err);
        }
    }
}