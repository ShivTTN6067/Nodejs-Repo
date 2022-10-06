import { Request, Response, NextFunction, Errback, Router } from 'express';
import { getAllUsersData, getUserData, createUserData, deleteUserData, updateUserData } from '../services/user'
import {userType} from '../types/userTypes'
import { userSchema } from '../validator/schema'
/**
 * Renders name when `/getUser` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
 export const getAllUsers = (req: Request, res: Response, next: NextFunction) : void => {
    try{
        const data = getAllUsersData();
        res.status(200).send({ ...data });
    }catch(err){
        next(err)
    }
}

/**
 * Renders name when `/getUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
export const getUser = (req: Request, res: Response, next: NextFunction) : void => {
    try{
        const data = getUserData((req.params.id as unknown) as number);
        res.status(200).send({ ...data });
    }catch(err){
        next(err)
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
export const createUser = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try{
        await userSchema.validateAsync(req.body)
        const {body}:{body:userType} = req;
        const response = createUserData(body);
        res.status(201).send({ msg: response });
    }catch(err){
        next(err);
    }
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
export const deleteUser = (req: Request, res: Response, next: NextFunction) : void => {
    const response = deleteUserData((req.params.id as unknown) as number);
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
export const updateUser = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try{
        await userSchema.validateAsync(req.body)
        const response = updateUserData((req.params.id as unknown) as number, req.body);
        res.status(201).send({ msg: response });
    }catch(err){
        next(err);
    }
}
