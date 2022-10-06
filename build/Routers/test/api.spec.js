"use strict";
const request = require('supertest');
describe('POST /add-task', function () {
    it('Adds a task', function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .get('/1')
            .send({ title: "Updated task buoy" })
            .expect(200, done);
    });
});
