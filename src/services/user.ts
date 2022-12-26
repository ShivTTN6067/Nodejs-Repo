import userModel from "../model/user-model";
import { userType } from "../types/user-types";

class User {

	getAllUsersData = async () => {
		const users = await userModel.find({});
		return users;
	};

	getUserData = async (id: string) => {
		const users = await userModel.find({id});
		return users;
	};

	createUserData = async (newUserData: userType): Promise<Object> => {
		const user = new userModel(newUserData);
		await user.save();
		return user;
	};

	deleteUserData = async (id: String): Promise<Object> => {
		const res = await userModel.deleteOne({id});
		return res.deletedCount;
	};

	updateUserData = async (updateUserValues: userType): Promise<Object> => {
		const response = await userModel.updateOne(updateUserValues);
		return response;
	};
}

const userObject = Object.freeze(new User());

export default userObject;
