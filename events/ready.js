const User = require("../class/user")

module.exports = {
    name: "ready",
    filter: (client, raw) => !client._initialized && raw.t == "READY",
    handle: (client, raw) => {
        client._initialized = true;
        client.user = new User(raw.d.user);
        client.readyAt = Date.now();
    }
}