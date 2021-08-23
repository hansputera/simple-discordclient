const Client = require("./core/client");
const token = "YOUR BOT TOKEN";

const client = new Client(token);
client.events.on("ready", () => {
    console.log("Im ready");
});
client.events.on("newMessage", m => {
    const id = m.id;
    console.log("ID:", id, "\nContent:", m.content, "\nUser:", m.author.tag);
});

client.login();