// Requiring module
import {describe, expect} from "@jest/globals";
import { getAllUsersData, getUserData, createUserData, deleteUserData, updateUserData } from "../user";
// We can group similar tests inside a describe block
describe("Simple Calculations", () => {

	// We can add nested blocks for different tests
	describe("Test1", () => {
		it("Test user getNameService", () => {
			expect(getUserData(0)).toStrictEqual({name:"John"});
		});

		it("Test user name record is not exist ", () => {
			expect(getUserData(1)).toBe(undefined);
		});

		it("Test user delete name record", () => {
			expect(deleteUserData(0)).toStrictEqual({name:"John"});
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
