const request = require('supertest');

describe('GET /add-task', function () {
    it('Adds a task', function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .get('/user/getUser/0')
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });

});

describe('POST /user/createUser', function () {
    it('create a task', function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .post('/user/createUser')
            .set("Authorization", "Bearer " + "123321123")
            .send({name:"testname"})
            .expect(201, done);
    });
    
})

describe('DELETE /deleteUser/:Id', function () {
    it('create a task', function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .delete('/user/deleteUser/0')
            .set("Authorization", "Bearer " + "123321123")
            .expect(200, done);
    });
    
})

describe('PUT /updateUser/:Id', function () {
    it('create a task', function (done) {
        // Use supertest to run assertions for our API
        request("http://localhost:4000/app")
            .put('/user/updateUser/0')
            .set("Authorization", "Bearer " + "123321123")
            .send({name:"John", class:"12th"})
            .expect(201, done);
    });
    
})