import userModel from '../model/user-model';
import { userType } from '../types/user-types';
import { callAwsLamda } from '../utils/aws-utils';
import { LAMDA_FUNCTIONS } from '../constants';
class User {

	getAllUsersData = async () => {
		const users = await userModel.find({});
		return users;
	};

	getUserData = async (id: string) => {
		const users = await userModel.find({_id:id});
		return users;
	};

	createUserData = async (newUserData: userType): Promise<Object> => {
		const user = new userModel(newUserData);
		await user.save();
		return user;
	};

	deleteUserData = async (id: String): Promise<Object> => {
		const res = await userModel.deleteOne({_id:id});
		return res.deletedCount;
	};

	updateUserData = async (userId: string, updateUserValues: userType): Promise<Object> => {
		const response = await userModel.updateOne({_id: userId}, { $set: {...updateUserValues}});
		return response;
	};

	sendSmsByLamda = async (): Promise<void> => {
		const payload = {name: 'amit'};
		const lamda = await callAwsLamda(LAMDA_FUNCTIONS.ALL_USERS_LAMDA_FN, payload);
		return lamda;
	};
}

const userObject = Object.freeze(new User());

export default userObject;
