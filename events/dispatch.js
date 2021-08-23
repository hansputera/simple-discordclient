const Guild = require("../class/guild");
const Message = require("../class/message");
const { gatewayAlias } = require("../codes");

module.exports = {
    name: "__dispatchState",
    filter: (_, raw) => raw.op == gatewayAlias.Dispatch,
    handle: (client, raw) => {
        if (raw.t == "GUILD_CREATE") {
            const g = new Guild(raw.d);
            client.guilds.set(g.id, g);
        } else if (raw.t == "MESSAGE_CREATE") {
            const m = new Message(raw.d);
            client.events.emit("newMessage", m);
        }
    }
}