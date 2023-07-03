import { Router } from 'express';
import UserController from '../controller/user-controller';
import { authChecker } from '../middleware/authentication';
import { bodyValidator, paramsValidator } from '../middleware/validator';

const userRouters = Router();

userRouters.get('/', authChecker, UserController.getAllUsers);

userRouters.get('/:id', authChecker, paramsValidator, UserController.getUser);

userRouters.post('/', authChecker, bodyValidator, UserController.createUser);

userRouters.delete('/:id', authChecker, paramsValidator, UserController.deleteUser);

userRouters.put('/:id', authChecker, paramsValidator, bodyValidator, UserController.updateUser);

userRouters.get('/send/sms', authChecker, UserController.sendSms);

export default userRouters;