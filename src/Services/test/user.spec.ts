import { describe, expect } from "@jest/globals";
import { getAllUsersData, getUserData, createUserData, deleteUserData, updateUserData } from "../user";

describe("Test cases for user CRUD operations", () => {

	describe("Test1", () => {
		it("Test user getUserData", () => {
			expect(getUserData(0)).toStrictEqual({ name: "John" });
		});

		it("Test user name record is not exist ", () => {
			expect(getUserData(1)).toBe(undefined);
		});

		it(" get all users data ", () => {
			expect(getAllUsersData()).toStrictEqual([{ name: "John" }]);
		});

		it("Test user create name record", () => {
			expect(createUserData({name:"abc", class:12})).toBe("created");
		});

		it("Test user delete name record", () => {
			expect(deleteUserData(0)).toStrictEqual({ name: "John" });
		});

		it("Test user delete name record for non exist", () => {
			expect(deleteUserData(2)).toBe("");
		});

		it("Test user delete name record", () => {
			expect(updateUserData(0, {
				"name": "fgdxgfhj",
				"class": 1
			})).toStrictEqual({
				"name": "fgdxgfhj",
				"class": 1
			});
		});

	});
});
