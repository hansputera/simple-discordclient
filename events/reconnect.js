const { gatewayAlias } = require("../codes");

module.exports = {
    name: "reconnect",
    filter: (_, raw) => raw.op == gatewayAlias.Reconnect,
    handle: (client, _) => {
        client.ws.continueSession();
        return client.ws.session_id;
    }
}