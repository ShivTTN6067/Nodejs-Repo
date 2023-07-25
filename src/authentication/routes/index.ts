import { Router } from 'express';
import { bodyValidator } from '../../middleware/auth-body-validator';
import authController from '../controller/auth-controller';

const authRouters = Router();

authRouters.post('/', bodyValidator, authController.authentication);

authRouters.post('/sign-up', authController.signUp);

authRouters.put('/reset-password', authController.resetPassword);

export default authRouters;
