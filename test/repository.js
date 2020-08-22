const assert = require('assert');
const repository = require("../src/repository")
const Contact = require("../src/Contact")
const expect = require('chai').expect;

describe('Contact', function () {
    describe('#CRUD', function () {
      it('should allow crud operations', async () => {
        
        await repository.cleanDB();
        
        const peter = new Contact("Peter Pan", "M", new Date(2000, 05, 34));
        const charles = new Contact("Charles Chapplin", "M", new Date(2000, 05, 34));

        await repository.addContact(peter);
        await repository.addContact(charles);

        const returnedPeter = await repository.getContact("Peter Pan")

        console.log("Peter", returnedPeter)

        
        const contacts = await repository.listAllContacts();
        contacts.forEach(x => console.log(x))

        
      });
    });
  });