import user from "../user";

describe("Test cases for user CRUD operations", () => {

	describe("Test1", () => {
		it("Test user getUserData ", () => {
			expect(user.getUserData(0)).toStrictEqual({ name: "John" });
		});

		it("Test user name record is not exist ", () => {
			expect(user.getUserData(1)).toBe(undefined);
		});

		it(" get all users data ", () => {
			expect(user.getAllUsersData()).toStrictEqual([{ name: "John" }]);
		});

		it("Test user create name record", () => {
			expect(user.createUserData({name:"abc", class:12})).toBe("created");
		});

		it("Test user delete name record", () => {
			expect(user.deleteUserData(0)).toStrictEqual({ name: "John" });
		});

		it("Test user delete name record for non exist", () => {
			expect(user.deleteUserData(2)).toBe("");
		});

		it("Test user delete name record", () => {
			expect(user.updateUserData(0, {
				"name": "fgdxgfhj",
				"class": 1
			})).toStrictEqual({
				"name": "fgdxgfhj",
				"class": 1
			});
		});

	});
});
