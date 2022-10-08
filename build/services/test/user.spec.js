"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const user_1 = require("../user");
(0, globals_1.describe)("Test cases for user CRUD operations", () => {
    (0, globals_1.describe)("Test1", () => {
        it("Test user getUserData", () => {
            (0, globals_1.expect)((0, user_1.getUserData)(0)).toStrictEqual({ name: "John" });
        });
        it("Test user name record is not exist ", () => {
            (0, globals_1.expect)((0, user_1.getUserData)(1)).toBe(undefined);
        });
        it(" get all users data ", () => {
            (0, globals_1.expect)((0, user_1.getAllUsersData)()).toStrictEqual([{ name: "John" }]);
        });
        it("Test user create name record", () => {
            (0, globals_1.expect)((0, user_1.createUserData)({ name: "abc", class: 12 })).toBe("created");
        });
        it("Test user delete name record", () => {
            (0, globals_1.expect)((0, user_1.deleteUserData)(0)).toStrictEqual({ name: "John" });
        });
        it("Test user delete name record", () => {
            (0, globals_1.expect)((0, user_1.updateUserData)(0, {
                "name": "fgdxgfhj",
                "class": 1
            })).toStrictEqual({
                "name": "fgdxgfhj",
                "class": 1
            });
        });
    });
});
