import userData from "../model/user-model";
import { userType, getUserDataType } from "../types/user-types";

class User {

	getAllUsersData = (): getUserDataType => {
		const res = userData.getAllRecords();
		return res;
	};

	getUserData = (id: number): userType => {
		const res = userData.getRecord(id)
		return res;
	};

	createUserData = (newUserData: userType): number => {
		const response = userData.create(newUserData);
		return response;
	};

	deleteUserData = (id: number): getUserDataType => {
		const res = userData.delete(id);
		return res;
	};

	updateUserData = (id: number, updateUserValues: userType): userType => {
		const response = userData.update(id, updateUserValues);
		return response;
	};
}

export default new User();
