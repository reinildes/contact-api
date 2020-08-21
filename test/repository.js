const assert = require('assert');
const repository = require("../src/repository")

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Contact', function () {
    describe('#getContact()', function () {
      it('should return Reinildes', function () {
          console.log("ahhh", repository.getContact())
        assert.equal(repository.getContact(), "Reinildes");
      });
    });
  });