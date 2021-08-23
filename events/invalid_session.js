const { gatewayAlias } = require("../codes");

module.exports = {
    name: "invalid_session",
    filter: (_, raw) => raw.op == gatewayAlias.InvalidSession,
    handle: () => {
        throw new Error("Invalid Session, Destroying process");
    }
}