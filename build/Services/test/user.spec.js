"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Requiring module
const globals_1 = require("@jest/globals");
const user_1 = require("../user");
// We can group similar tests inside a describe block
(0, globals_1.describe)("Simple Calculations", () => {
    // We can add nested blocks for different tests
    (0, globals_1.describe)("Test1", () => {
        it("Test user getNameService", () => {
            (0, globals_1.expect)((0, user_1.getUserData)(0)).toStrictEqual({ name: "John" });
        });
        it("Test user name record is not exist ", () => {
            (0, globals_1.expect)((0, user_1.getUserData)(1)).toBe(undefined);
        });
        it("Test user delete name record", () => {
            (0, globals_1.expect)((0, user_1.deleteUserData)(0)).toStrictEqual({ name: "John" });
        });
        it("Test user delete name record", () => {
            // expect(updateUserData(0)).toBe({
            // 	name: "fgdxgfhj",
            // 	role: 1,
            // 	ee: "DEe"
            // });
        });
    });
});
