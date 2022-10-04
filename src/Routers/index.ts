import { Express, Request, Response, NextFunction, Errback, Router } from 'express';
import userRouters from './user.router';

const Routers = Router();

Routers.use('/user', userRouters)

export default Routers;