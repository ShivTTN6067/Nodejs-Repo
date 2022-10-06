import { Request, Response, NextFunction, Errback, Router } from 'express';
import { getNameService, createNameService, deleteNameService, UpdateNameService } from '../Services/user.service'

/**
 * Renders name when `/getUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
export const getName = (req: Request, res: Response, next: NextFunction) => {
    const name = getNameService(Number(req.params.Id));
    if (name !== "") {
        res.status(200).send({ msg: name });
    } else {
        res.status(204).send({ msg: name });
    }
}

/**
 * Create name record when `/createUser` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
export const createName = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.name === undefined || req.body.name === "") {
        return next("please specify a name")
    }
    const response = createNameService(req.body.name);
    res.status(201).send({ msg: response });
}

/**
 * Delete name record when `/deleteUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const response = deleteNameService(Number(req.params.Id));
    res.status(200).send({ msg: response });
}

/**
 * Update name record when `/updateUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
    const response = UpdateNameService(Number(req.params.Id), req.body);
    res.status(201).send({ msg: response });
}
