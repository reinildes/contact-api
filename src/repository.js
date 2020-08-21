const Contact = require("../src/Contact")
const expect = require('chai').expect;

const {MongoClient} = require('mongodb');
class Repository {

    constructor(uri) {
        this.client =  new MongoClient(uri);
    }

    getContact = () => {
        return "Reinildes"
    }
    
    addContact = (contact) => {
        this.client.connect()
            .then(client =>{
                client.db("local")
                    .collection("contact")
                    .insert(contact);
            })
      
    }
    
    async listAllContacts = () => {
        this.client.connect()
            .then(client =>
                client.db("local")
                    .collection("contact")
                    .find()
            ).then(contacts > )
    }
}

module.exports = Repository

