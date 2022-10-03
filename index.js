const contacts = require('./contacts');

const { Command } = require("commander");

const program = new Command();

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "choose id")
    .option("-n, --name <type>", "choose name")
    .option("-e, --email <type>", "choose email")
    .option("-p, --phone <type>", "choose phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            contacts.listContacts();
            break;
        case "get":
            contacts.getContactById(id);
            break;
        case "add":
            contacts.addContact(name, email, phone);
            break;
        case "remove":
            contacts.removeContact(id);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);


console.log(contacts.listContacts());