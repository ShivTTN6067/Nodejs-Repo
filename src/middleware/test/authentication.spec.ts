import { Request, Response, NextFunction } from "express";
import { authChecker } from "../authentication";
import dotenv from "dotenv";
dotenv.config();

describe("authorization", () => {

	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let nextFunction: NextFunction = jest.fn();

	beforeEach(() => {
		mockRequest = {};
		mockResponse = {
			json: jest.fn()
		};
		nextFunction = jest.fn();
	});

	it("It should call without headers", async () => {
		const expectedResponse = {
			"error": "Missing JWT token from the 'Authorization' header"
		};
		authChecker(mockRequest as Request, mockResponse as Response, nextFunction);

		expect(mockResponse.json).toBeCalledWith(expectedResponse);
	});

	it("It should call with wronge token", async () => {
		mockRequest = {
			headers: {
				"authorization": "Bearer qww"
			}
		};
		authChecker(mockRequest as Request, mockResponse as Response, nextFunction);

		expect(nextFunction).toBeCalledTimes(0);
	});
    
	it("with \"authorization\" header", async () => {
		mockRequest = {
			headers: {
				"authorization": "Bearer 123321123"
			}
		};
		authChecker(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);

		expect(nextFunction).toBeCalledTimes(1);
	});

});