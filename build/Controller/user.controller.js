"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createName = exports.getName = void 0;
const user_service_1 = require("../Services/user.service");
/**
 * Renders name when `/getUser/:Id` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const getName = (req, res, next) => {
    const name = (0, user_service_1.getNameService)(Number(req.params.Id));
    res.status(200).send({ msg: name });
};
exports.getName = getName;
/**
 * Create name record when `/createUser` route is requested
 *
 * @param req - Object - Express request object
 * @param res - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {object}
 */
const createName = (req, res, next) => {
    const response = (0, user_service_1.createNameService)(req.body.name);
    res.status(201).send({ msg: response });
};
exports.createName = createName;
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
    const response = (0, user_service_1.deleteNameService)(Number(req.params.Id));
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
const updateUser = (req, res, next) => {
    const response = (0, user_service_1.UpdateNameService)(Number(req.params.Id), req.body);
    res.status(201).send({ msg: response });
};
exports.updateUser = updateUser;
