const assert = require('assert');
const Repository = require("../src/repository")
const Contact = require("../src/Contact")
const expect = require('chai').expect;

describe('Contact', function () {
    describe('#CRUD', function () {
      it('should allow crud operations', function () {
        
        const {MongoClient} = require('mongodb');

        const uri = "mongodb://localhost/test?retryWrites=true&w=majority";
        
        const peter = new Contact("Peter Pan", "M", new Date(2000, 05, 34));
        const charles = new Contact("Charles Chapplin", "M", new Date(2000, 05, 34));

        let repository = new Repository(uri)

        repository.addContact(peter);
        repository.addContact(charles);

        const contacts = repository.listAllContacts();

        assert.equal(contacts.lenght, 2);
      });
    });
  });