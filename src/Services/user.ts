import { user } from '../model/userModel';
import {userType} from '../types/userTypes'

export const getAllUsersData = () : object => {
    return user;
}

export const getUserData = (id: number) : object | undefined=> {
    return user[id];
}

export const createUserData = (userData: userType) : string => {
    user.push(userData);
    return "created"
}

export const deleteUserData = (id: number) : object | string => {
    const res = user.splice(id, 1)
    return res.length ? res[0] : "";
}

export const updateUserData = (id: number, updateUserValues: object) : object => {
    const res = { ...user[id], ...updateUserValues }
    user[id] = res;
    return user[id];
}
