const assert = require('assert');
const Contact = require("../src/Contact")

describe('Contact', function () {
  describe('#getAge()', function () {
    it('Returns number of years since birthDate', function () {
      console.log("test", Contact)

        let mary = new Contact("Mary Lucia", "F", new Date(1991, 11, 8))

      assert.equal(mary.getAge(), 28);
    });
  });
});