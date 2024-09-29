const prompt = require("prompt-sync")()

function printInfo() {
    console.log("Contact Management System")
    console.log("---------------------------------------------")
    console.log("1.Add contact")
    console.log("2.delete contact")
    console.log("3.list Contact")
    console.log("3.Veiw COntacts")
    console.log("4.Search Constact")
    console.log("5.Exit ")
}

function addContact(){
    const name = prompt("Name:")
    const email = prompt("Email:")
    const contact = {
        name:name,
        email:email,
    }
    contacts.push(contact)
    console.log("added!")
}

function deleteContact(){
    console.log("contact ids")
    for(let i=0;i<contacts.length;i++){
        const contact = contacts[i]
        console.log((i+1).toString() + ":" , contact.name)
    }
    const number = parseInt(prompt("Enter an ID"))
    if(isNaN(number) || number>contacts.length){
        console.log("INvalid")
        return
    }
    contacts.splice(number-1,1)
    console.log("removed")
}

function listContact(contacts){
    for(let contact of contacts){
        console.log("************************************")
        console.log('Name:',contact.name)
        console.log('Email:',contact.email)
    }
} 

function veiwContact(contacts){
    console.log(contacts)
}

function searchContact(){
    const searchString = prompt("Search:").toLowerCase()
    const results = []
    for(let contact of contacts){
        if(contact.name.includes(searchString)) results.push(contact)
    }
listContact(results)
}

const contacts = []
let keepGoing = true;

printInfo()

while (keepGoing) {
    const number = prompt("Enter an opeation (1-5): ")
    console.log()
    switch (number) {
        case "1":
            addContact()
            break;
        case "2":
            deleteContact()
            break;
        case "3":
            listContacts(contacts)
            break;
        case "4":
            searchContact()
            break;
        case "5":
            keepGoing = false;
            break;
        default:
            console.log("Unknown.")
            break;
    }
}