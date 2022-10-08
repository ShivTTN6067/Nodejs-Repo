"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.deleteUserData = exports.createUserData = exports.getUserData = exports.getAllUsersData = void 0;
const userModel_1 = require("../model/userModel");
const getAllUsersData = () => {
    return userModel_1.user;
};
exports.getAllUsersData = getAllUsersData;
const getUserData = (id) => {
    return userModel_1.user[id];
};
exports.getUserData = getUserData;
const createUserData = (userData) => {
    userModel_1.user.push(userData);
    return "created";
};
exports.createUserData = createUserData;
const deleteUserData = (id) => {
    const res = userModel_1.user.splice(id, 1);
    return res.length ? res[0] : "";
};
exports.deleteUserData = deleteUserData;
const updateUserData = (id, updateUserValues) => {
    const res = Object.assign(Object.assign({}, userModel_1.user[id]), updateUserValues);
    userModel_1.user[id] = res;
    return userModel_1.user[id];
};
exports.updateUserData = updateUserData;
