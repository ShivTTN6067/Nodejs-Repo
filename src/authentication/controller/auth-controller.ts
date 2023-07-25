import { Request, Response, NextFunction } from 'express';
import auth from '../service/auth-service';

class AuthController {

	authentication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const authToken = await auth.authentication(req.body);
			res.status(200).send({ authToken: authToken });
		} catch (err) {
			next(err);
		}
	};

	signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			await auth.registerUser(req.body);
			res.status(200).send({ status: 'success', signUp: true });
		} catch (err) {
			next(err);
		}
	};

	logOut =async () => {
        
	};

}

const authControllerObject = Object.freeze(new AuthController());

export default authControllerObject; 
