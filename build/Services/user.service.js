"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNameService = exports.deleteNameService = exports.createNameService = exports.getNameService = void 0;
const user_model_1 = require("../Model/user.model");
const getNameService = (Id) => {
    var _a, _b;
    return (_b = (user_model_1.user[Id] && ((_a = user_model_1.user[Id]) === null || _a === void 0 ? void 0 : _a.name))) !== null && _b !== void 0 ? _b : "";
};
exports.getNameService = getNameService;
const createNameService = (userName) => {
    let obj = { name: userName };
    user_model_1.user.push(obj);
    return "created";
};
exports.createNameService = createNameService;
const deleteNameService = (Id) => {
    const res = user_model_1.user.splice(Id, 1);
    console.log(res);
    return res.length > 0 ? res[0] : "";
};
exports.deleteNameService = deleteNameService;
const UpdateNameService = (Id, { name, role }) => {
    const res = Object.assign(Object.assign({}, user_model_1.user[Id]), { name: name, role: role });
    user_model_1.user[Id] = res;
    return user_model_1.user[Id];
};
exports.UpdateNameService = UpdateNameService;
