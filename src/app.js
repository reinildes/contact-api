const repository = require("./repository")
const Contact = require("./Contact")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

repository.connect()
    .then(() => seed())

app.get("/", (req, res) => {
    res.send("Welcome to contact api")
})

app.get("/contact", async (req, res) => {
    const contacts = await repository.listAllContacts()
    res.send(contacts)
})

app.get("/contact/:id", async (req, res) => {
    const contact = await repository.getContact(req.params.id)
    res.send(contact)
})

app.post("/contact", async (req, res) => {
    try {
        const newContact = new Contact(req.body.name, req.body.gender, new Date(req.body.birthDate))
        await repository.addContact(newContact)
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)        
    }
})

app.put("/contact/:id", async (req, res) => {
    try {
        const newContact = new Contact(req.body.name, req.body.gender, new Date(req.body.birthDate))
        await repository.updateContact(req.params.id, newContact)
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message)        
    }
})

const seed = () => {

    const contacts = [
        new Contact("Luiz Inacio Lula da Silva", "M", new Date(1950, 10, 17)),
        new Contact("Jair Messias Bolsolaro", "M", new Date(1960, 8, 13)),
        new Contact("Dilma Rousseff", "F", new Date(1970, 2, 13)),
        new Contact("Fernando Henrique Cardoso", "M", new Date(1940, 4, 5)),
        new Contact("Fernando Color", "M", new Date(1958, 10, 1))
    ]

    contacts.forEach( contact => repository.addContact(contact))
}

app.listen(3000, () => console.log("Server is running!"))