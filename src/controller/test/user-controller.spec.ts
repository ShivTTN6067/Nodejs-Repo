import { Request, Response, NextFunction } from "express";
import user from "../user-controller";

describe("UserController", () => {

	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let mockNextFunction: NextFunction = jest.fn();

	beforeEach(() => {
		mockRequest = {};
		mockResponse = {
			send: jest.fn(),
			status: jest.fn().mockReturnThis(),
		};
		mockNextFunction = jest.fn();
	});

	describe("create user", () => {
		it("should return a success", () => {

			mockRequest = {
				body: {
					name: "testname",
					class: 12
				}
			};

			user.createUser(mockRequest as Request, mockResponse as Response, mockNextFunction);
			expect(mockResponse.send).toHaveBeenCalledWith({ Id: 0 });
			expect(mockResponse.status).toHaveBeenCalledWith(201);
		});
	});

	describe("get all users data", () => {
		it("should return all users data", () => {

			mockRequest = {
				params: {
				}
			};

			user.getAllUsers(mockRequest as Request, mockResponse as Response, mockNextFunction);
			expect(mockResponse.send).toHaveBeenCalledWith([{ name: "testname", class: 12 }]);
			expect(mockResponse.status).toHaveBeenCalledWith(200);
		});
	});

	describe("get a user data", () => {
		it("should return a user data", () => {

			mockRequest = {
				params: {
					id: "0"
				}
			};

			user.getUser(mockRequest as Request, mockResponse as Response, mockNextFunction);
			expect(mockResponse.send).toHaveBeenCalledWith({ name: "testname", class: 12 });
			expect(mockResponse.status).toHaveBeenCalledWith(200);
		});
	});

	describe("delete a user data", () => {
		it("should return a deleted user data", () => {

			mockRequest = {
				params: {
					id: "0"
				}
			};

			user.deleteUser(mockRequest as Request, mockResponse as Response, mockNextFunction);
			expect(mockResponse.send).toHaveBeenCalledWith([{ name: "testname", class: 12 }]);
			expect(mockResponse.status).toHaveBeenCalledWith(200);
		});
	});

	describe("update a user data", () => {
		it("should return a updated user data", () => {

			mockRequest = {
				params: {
					id: "0"
				},
				body: {
					name: "new name",
					class: 11
				}
			};

			user.updateUser(mockRequest as Request, mockResponse as Response, mockNextFunction);
			expect(mockResponse.send).toHaveBeenCalledWith({ name: "new name", class: 11 });
			expect(mockResponse.status).toHaveBeenCalledWith(201);
		});
	});


});