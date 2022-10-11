const request = require("supertest");
const address = "http://localhost:8080/app";

describe("POST /users", () => {
	it("It should create a user data", async () => {
		const response = await request(address)
			.post("/users/")
			.set("Authorization", "Bearer " + "123321123")
			.send({ name: "testname", class: 12 });
		expect(response.body).toEqual({Id:0});
		expect(response.statusCode).toEqual(201);
	});

	it("It should create a user with wronge request data",async () => {
		const response = await request(address)
			.post("/users/")
			.set("Authorization", "Bearer " + "123321123")
			.send({ name: "testname", class: "12", "uui": 99 });
		expect(response.statusCode).toEqual(400);
	});

	it("It should create a user without request body",async () => {
		const response = await request(address)
			.post("/users/")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.statusCode).toEqual(400);
	});

});

describe("GET /users", () => {
	it("It should get all users data", async () => {
		const response = await request(address)
			.get("/users")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.body).toEqual([{ name: "testname", class: 12 }]);
		expect(response.statusCode).toEqual(200);
	});

	it("It should respond unauthorized access", async () => {
		const response = await request(address)
			.get("/users")
			.set("Authorization", "Bearer " + "123321s123");
		expect(response.body).toEqual({ error: "Missing JWT token from the 'Authorization' header" });
		expect(response.statusCode).toEqual(401);
	});

	it("It should respond not found", async () => {
		const response = await request(address)
			.get("/users1")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.statusCode).toEqual(404);
	});

});

describe("GET /users/:id", () => {
	it("It should get a user details", async () => {
		const response = await request(address)
			.get("/users/0")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.body).toEqual({ name: "testname", class: 12 });
		expect(response.statusCode).toEqual(200);	
	});

	it("It should respond unauthorized access", async () => {
		const response = await request(address)
			.get("/users/0")
			.set("Authorization", "Bearer " + "123321s123");
		expect(response.body).toEqual({ error: "Missing JWT token from the 'Authorization' header" });
		expect(response.statusCode).toEqual(401);
	});

	it("It should respond not found when user detail is not exist",async () => {
		const response = await request(address)
			.get("/users/2")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.statusCode).toEqual(404);	
	});

	it("It should respond not found when request have wronge params",async () => {
		const response = await request(address)
			.get("/users/'0")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.statusCode).toEqual(400);	
	});

});

describe("DELETE /users/:id", () => {
	it("It should delete a user", async () => {
		const response = await request(address)
			.delete("/users/0")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.body).toEqual([{ name: "testname", class: 12 }]);
		expect(response.statusCode).toEqual(200);
	});

	it("It should respond not found status when delete a user without params", async () => {
		const response = await request(address)
			.delete("/users/")
			.set("Authorization", "Bearer " + "123321123");
		expect(response.statusCode).toEqual(404);
	});

});

describe("PUT /users/:id", () => {
	it("It should update a user ", async () => {
		const response = await request(address)
			.put("/users/0")
			.set("Authorization", "Bearer " + "123321123")
			.send({ name: "kim", class: 12 });
		expect(response.body).toEqual({ name: "kim", class: 12 });
		expect(response.statusCode).toEqual(201);
	});

	it("It should respond bad request when pass wronge value ", async () => {
		const response = await request(address)
			.put("/users/0")
			.set("Authorization", "Bearer " + "123321123")
			.send({ name: "kim", class: 12, roll: "78" });
		expect(response.statusCode).toEqual(400);
	});

	it("It should respond bad request when donot pass request body", async () => {
		const response = await request(address)
			.put("/users/0")
			.set("Authorization", "Bearer " + "123321123")
			.send();
		expect(response.statusCode).toEqual(400);
	});

});