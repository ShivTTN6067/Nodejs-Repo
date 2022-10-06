"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Requiring module
const assert = require('assert');
const user_service_1 = require("../user.service");
// We can group similar tests inside a describe block
describe("Simple Calculations", () => {
    // We can add nested blocks for different tests
    describe("Test1", () => {
        it("Test user getNameService", () => {
            assert.equal((0, user_service_1.getNameService)(0), "John");
        });
        it("Test user name record is not exist ", () => {
            assert.equal((0, user_service_1.getNameService)(1), "");
        });
    });
});
