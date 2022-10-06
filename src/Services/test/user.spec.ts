// Requiring module
const assert = require('assert');
import { getNameService, createNameService, deleteNameService, UpdateNameService } from '../user.service'
// We can group similar tests inside a describe block
describe("Simple Calculations", () => {

	// We can add nested blocks for different tests
	describe("Test1", () => {
		it("Test user getNameService", () => {
			assert.equal(getNameService(0), "John");
		});

		it("Test user name record is not exist ", () => {
			assert.equal(getNameService(1), "");
		});

		it("Test user create name record ", () => {
			assert.equal(createNameService("testbame"), "created");
		});

		it("Test user create name record with false undefiend name", () => {
			assert.equal(createNameService(""), "created");
		})

		it("Test user delete name record", () => {
			assert.equal(deleteNameService(0), "John");
		})

		it("Test user delete name record", () => {
			assert.equal(UpdateNameService(0, {
				name: "fgdxgfhj",
				role: 1,
				ee: "DEe"
			}), {
				name: "fgdxgfhj",
				role: 1,
				ee: "DEe"
			});
		})

	});

});
