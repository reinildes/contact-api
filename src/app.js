const repository = require("./repository")
const Contact = require("./Contact")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

repository.connect()

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
    const newContact = new Contact(req.body.name, req.body.gender, new Date(req.body.birthDate))
    await repository.addContact(newContact)
    res.send("Added with success!")
})

app.put("/contact", async (req, res) => {
    console.log(req.body)
    const newContact = new Contact(req.body.name, req.body.gender, new Date(req.body.birthDate))
    await repository.updateContact(newContact)
    res.send("Added with success!")
})

app.listen(3000, () => console.log("Server is running!"))