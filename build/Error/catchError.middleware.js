"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatcher = void 0;
/**
 * Catch error when any controller throws an error
 *
 * @param controllerFunction - Object - Express request object
 *
 * @returns {void}
 */
const errorCatcher = (controllerFunction) => {
    return (req, res, next) => {
        try {
            controllerFunction(req, res, next);
        }
        catch (err) {
            next(err);
        }
    };
};
exports.errorCatcher = errorCatcher;
