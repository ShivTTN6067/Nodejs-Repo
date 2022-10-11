import { Request, Response, NextFunction } from "express";
import user from "../services/user";

class UserController {

	getAllUsers = (req: Request, res: Response, next: NextFunction): void => {
		try {
			const data = user.getAllUsersData();
			res.status(200).send(data);
		} catch (err) {
			next(err);
		}
	};

	getUser = (req: Request, res: Response, next: NextFunction): void => {
		try {
			//console.log("-------========------",typeof(req.params.id));
			const data = user.getUserData(+req.params.id);
			data ?? res.status(404).send(data);
			res.status(200).send(data);
		} catch (err) {
			res.status(400).send({ msg: err });
		}
	};

	createUser = (req: Request, res: Response, next: NextFunction): void => {
		try {
			const response = user.createUserData(req.body);
			res.status(201).send({Id:response});
		} catch (err) {
			res.status(501).send({ msg: err });
		}
	};

	deleteUser = (req: Request, res: Response, next: NextFunction): void => {
		const response = user.deleteUserData(parseInt(req.params.id));
		response.length !== 0 ? res.status(200).send(response) :
			res.status(500).send({ msg: "No data" });
	};

	updateUser = (req: Request, res: Response, next: NextFunction): void => {
		try {
			const response = user.updateUserData(parseInt(req.params.id), req.body);
			res.status(201).send(response);
		} catch (err) {
			next(err);
		}
	};
}

export default new UserController(); 
