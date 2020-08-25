const repository = require("../src/repository")
const Contact = require("../src/Contact")
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Contact', function () {

    describe('#CRUD', function () {

      before(  function () { repository.connect() });
      after(  function () {  repository.disconnect()});
      afterEach(  async function () { repository.cleanDB() });
      beforeEach(  async function () { repository.cleanDB() });
  

      it('adds and lists all contacts', async function() {
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

      it('deletes single object', async function() {
        
        const contact = new Contact("Henrique", "M", new Date(2000, 05, 34));

        repository.addContact(contact);

        const contactList = await repository.listAllContacts()

        assert.equal(contactList.length, 1)

        await repository.removeContact(contact)
        const contactList2 = await repository.listAllContacts()

        assert.equal(contactList2.length, 0)
      });

      it('updates single object', async function() {
        
        const contact = new Contact("Henrique", "M", new Date(2000, 05, 34));

        await repository.addContact(contact);

        const contactReturned = await repository.getContact(contact._id)

        assert.equal(contactReturned.name, "Henrique")

        contact.name = "Not Henrique Anymore"

        await repository.updateContact(contact)
        const contactUpdated = await repository.getContact(contact._id)

        assert.equal(contactUpdated.name, "Not Henrique Anymore")
      });
    });
  });