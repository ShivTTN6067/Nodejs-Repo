"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const user_1 = require("../services/user");
const schema_1 = require("../validator/schema");
/**
 * Renders name when `/getUser` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const getAllUsers = (req, res, next) => {
    try {
        const data = (0, user_1.getAllUsersData)();
        res.status(200).send(Object.assign({}, data));
    }
    catch (err) {
        next(err);
    }
};
exports.getAllUsers = getAllUsers;
/**
 * Renders name when `/getUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const getUser = (req, res, next) => {
    try {
        const data = (0, user_1.getUserData)(req.params.id);
        res.status(200).send(Object.assign({}, data));
    }
    catch (err) {
        next(err);
    }
};
exports.getUser = getUser;
/**
 * Create name record when `/createUser` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.userSchema.validateAsync(req.body);
        const { body } = req;
        const response = (0, user_1.createUserData)(body);
        res.status(201).send({ msg: response });
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
/**
 * Delete name record when `/deleteUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const deleteUser = (req, res, next) => {
    const response = (0, user_1.deleteUserData)(req.params.id);
    res.status(200).send({ msg: response });
};
exports.deleteUser = deleteUser;
/**
 * Update name record when `/updateUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema_1.userSchema.validateAsync(req.body);
        const response = (0, user_1.updateUserData)(req.params.id, req.body);
        res.status(201).send({ msg: response });
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
