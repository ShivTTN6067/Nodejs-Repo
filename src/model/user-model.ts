
import { getUserDataType, userType } from "../types/user-types";

class UserData {

	public data: getUserDataType ;

	constructor() {
		this.data = [];
	}

	getRecord(id: number): userType {
		return this.data[id];
	}

	getAllRecords(): getUserDataType {
		return this.data;
	}

	delete(id: number): getUserDataType {
		return this.data.splice(id, 1);
	}

	create(newData: userType) : number {
		this.data.push(newData);
		return this.data.length-1;
	}

	update(id: number, data: userType): userType {
		this.data[id] = { ...this.data[id], ...data };
		return this.data[id];
	}

}

export default new UserData();