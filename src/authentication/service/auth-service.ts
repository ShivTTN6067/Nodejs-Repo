import bcrypt from 'bcrypt';
import { loginType, userSignUp } from '../../types/login-types';
import Login from '../model/index';
import { createToken } from '../../utils/jwt-utils';

class Auth {

	authentication = async (loginBody: loginType) => {
		const user = await Login.findOne({ userName: loginBody.userName });
		if (user?.userName) {
			const isPasswordMatch = await bcrypt.compare(loginBody.password, user.password);
			if (isPasswordMatch) {
				return createToken({ id: user._id, username: user.userName });
			}
			throw new Error('Password does not matches');
		}

		throw new Error('User Not Exist');
	};

	registerUser = async (signUpBody: userSignUp): Promise<Object> => {
		const login = new Login(signUpBody);
		await login.save();
		return login;
	};

}

const authObject = Object.freeze(new Auth());

export default authObject;
