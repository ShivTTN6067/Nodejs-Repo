"use strict";
const request = require("supertest");
describe("GET /add-task", function () {
    it("Adds a task", function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .get("/user/0")
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
});
describe("POST /user/createUser", function () {
    it("create a task", function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .post("/user/")
            .set("Authorization", "Bearer " + "123321123")
            .send({ name: "testname" })
            .expect(201, done);
    });
});
describe("DELETE /deleteUser/:Id", function () {
    it("create a task", function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .delete("/user/0")
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
});
describe("PUT /updateUser/:Id", function () {
    it("create a task", function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .put("/user/0")
            .set("Authorization", "Bearer " + "123321123")
            .send({ name: "John", class: 12 })
            .expect(201, done);
    });
});
