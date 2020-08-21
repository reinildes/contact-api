const assert = require('assert');
const Contact = require("../src/Contact")

describe('Contact', function () {
  describe('#getAge()', function () {
    it('Returns number of years since birthDate', function () {

        let mary = new Contact("Mary Lucia", "F", new Date(1991, 11, 8))

      assert.equal(mary.getAge(), 28);
    });
  });

  describe('#getAge()', function () {
    it("Throws Error when Contact is a minor", function () {

 
        assert.throws(() => new Contact("Juninho", "M", new Date(2003, 11, 8)), Error, "Error: Not safe for minors");
      

    });
  });
});