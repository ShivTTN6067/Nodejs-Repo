"use strict";
const request = require("supertest");
const address = "http://localhost:8080/app";
describe("GET /user", () => {
    it("get all user detail", (done) => {
        request(address)
            .get("/users")
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
    it("Auth token is wronge", (done) => {
        request(address)
            .get("/users")
            .set("Authorization", "Bearer " + "123321s123")
            .expect(401, done);
    });
});
describe("GET /user/:id", () => {
    it("get a user detail", (done) => {
        request(address)
            .get("/users/0")
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
    it("Auth token is wronge", (done) => {
        request(address)
            .get("/users/0")
            .set("Authorization", "Bearer " + "123321s123")
            .expect(401, done);
    });
    it("get a non exist user detail", (done) => {
        request(address)
            .get("/users/2")
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
});
describe("POST /user", () => {
    it("create a user data", (done) => {
        request(address)
            .post("/users/")
            .set("Authorization", "Bearer " + "123321123")
            .send({ name: "testname", class: 12 })
            .expect(201, done);
    });
    it("create a user with wroge ", (done) => {
        request(address)
            .post("/users/")
            .set("Authorization", "Bearer " + "123321123")
            .send({ name: "testname", class: "12", "uui": 99 })
            .expect(500, done);
    });
});
describe("DELETE /user/:id", () => {
    it("delete a user", (done) => {
        request(address)
            .delete("/users/0")
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
    it("when delete a user with params", (done) => {
        request(address)
            .delete("/users/")
            .set("Authorization", "Bearer " + "123321123")
            .expect(404, done);
    });
});
describe("PUT /user/:id", () => {
    it("update a user ", (done) => {
        request(address)
            .put("/users/0")
            .set("Authorization", "Bearer " + "123321123")
            .send({ name: "kim", class: 12 })
            .expect(201, done);
    });
    it(" pass wronge value when update a user ", (done) => {
        request(address)
            .put("/users/0")
            .set("Authorization", "Bearer " + "123321123")
            .send({ name: "kim", class: 12, roll: "78" })
            .expect(500, done);
    });
});
