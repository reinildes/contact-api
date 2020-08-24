const repository = require("../src/repository")
const Contact = require("../src/Contact")
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Contact', function () {
    describe('#CRUD', function () {

      beforeEach(() => repository.connect());

      afterEach(() => repository.disconnect());

      it('repository lists all contacts', async function() {
        
        repository.cleanDB();
        
        const peter = new Contact("Single", "M", new Date(2000, 05, 34));
        const charles = new Contact("Charles Chapplin", "M", new Date(2000, 05, 34));

        repository.addContact(peter);
        repository.addContact(charles);

        const contactList = await repository.listAllContacts()
        const sortedContactList = contactList.sort( (x,y) => x > y ? 1 : -1)

        expect(contactList.length).to.eq(2)

        const savedCharles = sortedContactList[0]
        const savedPeter = sortedContactList[1]

        assert.isTrue(savedCharles.equals(charles))
        assert.isTrue(savedPeter.equals(peter))
      });
    });
  });