import user from "../user";

describe("User", () => {

	describe("It should create record", () => {

		it(" It should test user create name record ", () => {
			expect(user.createUserData({ name: "abc", class: 12 })).toEqual(0);
		});

	});

	describe("It should get record", () => {

		it("It should get user data ", () => {
			expect(user.getUserData(0)).toEqual({ name: "abc", class: 12 });
		});

		it("Test user name record is not exist ", () => {
			expect(user.getUserData(1)).toEqual(undefined);
		});

		it(" get all users data ", () => {
			expect(user.getAllUsersData()).toStrictEqual([{ class: 12, name: "abc" }]);
		});

	});

	describe("It should update record", () => {

		it("Test user update record", () => {
			expect(user.updateUserData(0, {
				"name": "fgdxgfhj",
				"class": 1
			})).toEqual({
				"name": "fgdxgfhj",
				"class": 1
			});
		});

	});

	describe("It should delete record", () => {

		it("Test user delete name record", () => {
			expect(user.deleteUserData(0)).toEqual([{
				"name": "fgdxgfhj",
				"class": 1
			}]);
		});

		it("Test user delete name record for non exist", () => {
			expect(user.deleteUserData(2)).toEqual([]);
		});


	});

});
