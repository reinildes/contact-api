const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost/test?retryWrites=true&w=majority";

async function main(){

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    const contacts = client.db("local").collection("contact").find();

    contacts.forEach(x => console.log(x.name))
  
};

main().catch(console.error);




