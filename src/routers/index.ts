import { Router } from 'express';
import userRouters from '../user/routes';
import authRouters from  '../authentication/routes'

const Routers = Router();

Routers.use('/users', userRouters);
Routers.use('/auth', authRouters);

export default Routers;