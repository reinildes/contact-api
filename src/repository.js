const Contact = require("../src/Contact")

const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function mongodb(){   
    try {
        await client.connect();
 
        return client;
 
    } catch (e) {
        console.error(e);
    } 
}

async function addContact(contact){

        await mongodb();

        client.db("local")
                .collection("contact")
                .insertOne(contact);
}

async function listAllContacts(){

    await mongodb();

    const result = await client.db("local")
        .collection("contact")
        .find({})
        .map(x => new Contact(x.name, x.gender, new Date(x.birthDate)))

    return result;
}

async function cleanDB(){

    await mongodb();

    await client.db("local")
        .collection("contact")
        .remove();
}

async function removeContact(contact){

    await mongodb();

    await client.db("local")
        .collection("contact")
        .remove({name: contact.name});
}

async function getContact(name){

    await mongodb();

    await client.db("local")
        .collection("contact")
        .findOne({name: "Peter Pan"})
}

module.exports = {listAllContacts, addContact, cleanDB, removeContact, getContact}


