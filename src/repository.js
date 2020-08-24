const Contact = require("../src/Contact")
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connect(){   
    try {
        await client.connect();
        return client;
 
    } catch (e) {
        console.error(e);
    } 
}

async function disconnect(){
    try {
        await client.close();
    } catch (e) {
        console.error(e);
    }
}

async function addContact(contact){

        client.db("local")
                .collection("contact")
                .insertOne(contact);
}

async function listAllContacts(){

    const result = await client.db("local")
        .collection("contact")
        .find({})
        .map(x => new Contact(x.name, x.gender, new Date(x.birthDate)))
        .toArray()

    return result;
}

async function cleanDB(){

    client.db("local")
        .collection("contact")
        .deleteMany();
}

async function removeContact(contact){

    client.db("local")
        .collection("contact")
        .deleteOne({_id: contact._id});
}

async function getContact(name){

    client.db("local")
        .collection("contact")
        .findOne({name: "Single"})
}

module.exports = {listAllContacts, addContact, cleanDB, removeContact, getContact, connect, disconnect}