import { Request, Response, NextFunction } from 'express';
import { bodyValidator, paramsValidator } from '../validator';

describe('Test for body validator', () => {

	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let mockNext: NextFunction;

	beforeEach(() => {
		mockRequest = {};
		mockResponse = {
			json: jest.fn()
		};
		mockNext = jest.fn();
	});

	it('Should validateAsync method record', async () => {
		mockRequest = { body: { name: 'abc', class: 12 } };
		await bodyValidator(mockRequest as Request, mockResponse as Response, mockNext);
		expect(mockNext).toBeCalledTimes(1);
	});

	it('Should validateAsync method with wronge data', async () => {
		mockRequest = { body: { name: 'abc', class: 12, roll: 33 } };
		await bodyValidator(mockRequest as Request, mockResponse as Response, mockNext);
		expect(mockNext).toBeCalledTimes(0);
	});

	it('Should validateAsync method without body', async () => {
		mockRequest = { body: {} };
		await bodyValidator(mockRequest as Request, mockResponse as Response, mockNext);
		expect(mockNext).toBeCalledTimes(0);
	});

});

describe('Test for params validator', () => {

	let mockRequest: Partial<Request>;
	let mockResponse: Partial<Response>;
	let mockNext: NextFunction;

	beforeEach(() => {
		mockRequest = {};
		mockResponse = {
			json: jest.fn()
		};
		mockNext = jest.fn();
	});

	it('Should params valid', async () => {
		mockRequest = { params: { id: '64a2a13e529fabde81bc15d4' } };
		await paramsValidator(mockRequest as Request, mockResponse as Response, mockNext);
		expect(mockNext).toBeCalledTimes(1);
	});

	it('Should validateAsync method with wronge params', async () => {
		mockRequest = { params: { id: '' } };
		await paramsValidator(mockRequest as Request, mockResponse as Response, mockNext);
		expect(mockNext).toBeCalledTimes(0);
	});

	it('Should validateAsync method without params', async () => {
		mockRequest = { params: {} };
		await paramsValidator(mockRequest as Request, mockResponse as Response, mockNext);
		expect(mockNext).toBeCalledTimes(0);
	});

});