import { Router } from 'express';
import { getName, createName, deleteUser, updateUser } from '../Controller/user.controller';
import { authChecker } from '../Middleware/userRelated.middleware';
import {errorCatcher} from '../Error/catchError.middleware';

const userRouters = Router();

userRouters.get('/getUser/:Id', authChecker, errorCatcher(getName));

userRouters.post('/createUser', authChecker, errorCatcher(createName));

userRouters.delete('/deleteUser/:Id', authChecker, errorCatcher(deleteUser));

userRouters.put('/updateUser/:Id', authChecker, errorCatcher(updateUser));

export default userRouters;