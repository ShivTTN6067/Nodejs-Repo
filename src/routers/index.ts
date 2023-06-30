import { Router } from 'express';
import userRouters from './router';

const Routers = Router();

Routers.use('/users', userRouters);

export default Routers;