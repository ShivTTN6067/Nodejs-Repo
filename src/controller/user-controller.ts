import { Request, Response, NextFunction } from 'express';
import user from '../services/user';

class UserController {

	getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const data = await user.getAllUsersData();
			res.status(200).send(data);
		} catch (err) {
			next(err);
		}
	};

	getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const data = await user.getUserData(req.params.id);
			!data.length ? res.status(404).send(data) :res.status(200).send(data);
		} catch (err) {
			res.status(400).send({ msg: err });
		}
	};

	createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const response = await user.createUserData(req.body);
			res.status(201).send(response);
		} catch (err) {
			res.status(501).send({ msg: err });
		}
	};

	deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		const response = await user.deleteUserData(req.params.id);
		response ? res.status(200).send({msg: 'data deleted'}) :
			res.status(500).send({ msg: 'No data' });
	};

	updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const response = await user.updateUserData(req.params.id, req.body);
			res.status(201).send(response);
		} catch (err) {
			next(err);
		}
	};

	sendSms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const response = await user.sendSmsByLamda();
			res.status(201).send(response);
		} catch (err) {
			next(err);
		}
	};
}

const userControllerObject = Object.freeze(new UserController());

export default userControllerObject; 
