"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const authChecker = (req, res, next) => {
    var _a;
    if (((_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) === process.env.ACCESSCODE) {
        return next();
    }
    res.status(401).send({
        msg: "Invalid credentials",
    });
};
exports.authChecker = authChecker;
