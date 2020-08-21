const assert = require('assert');
const Contact = require("../src/Contact")
const expect = require('chai').expect;

describe('Contact', function () {
  describe('#getAge()', function () {
    it('Returns number of years since birthDate', function () {

        let mary = new Contact("Mary Lucia", "F", new Date(1991, 11, 8))

        assert.equal(mary.getAge(), 28);

    });
  });

  describe('#Validations()', function () {
    it("Throws Error when Contact is a minor", function () {
 
        expect(() => new Contact("Juninho", "M", new Date(2003, 11, 8))).to.throw("Not safe for minors!")
      
      });

      it("Throws Error when BirthDate is greater than today", function () {
 
        const today = new Date();
        const tomorrow = new Date(today.setDate(today.getDate() + 1))

        expect(() => new Contact("Juninho", "M", tomorrow)).to.throw("Invalid Date. Make sure BirthDate is less than today!")
      
      });
  });


});