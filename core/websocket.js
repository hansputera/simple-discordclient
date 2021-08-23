const Ws = require("ws");
const { gatewayAlias, gateway } = require("../codes");
const Pkg = require("../package.json");

module.exports = class WebSocketCore {
    constructor(token) {
        this.gateway = "wss://gateway.discord.gg/?v=9&encoding=json";
        this.ws = new Ws(this.gateway);
        this.token = token;
        this.events = new Ws.EventEmitter();
        this.session_id = "";

        this.ws.on("message", (data) => {
            const decoded = JSON.parse(data.toString("utf8"));
            const receiveOp = gateway[decoded.op];
            if (receiveOp) {
                if (receiveOp == gateway[10]) this.events.emit("_state", true);
                else if (decoded.t == "READY") this.session_id = decoded.d.session_id;
                this.events.emit("raw", decoded);
            }
        });
        this.ws.on("close", (code, reason) => {
            if (code == 4004) {
                throw new Error(reason.toString());
            }
            this.events.emit("closed", code, reason.toString());
        });
    }

    continueSession() {
        if (!this.session_id.length) {
            throw new Error("Session ID is invalid");
        } else {
            const payload = {
                op: gatewayAlias.Resume,
                d: {
                    token: this.token,
                    session_id: this.session_id,
                    seq: 1337
                }
            }
            this.events.emit("reconnecting", this.session_id);
            this.ws.send(JSON.stringify(payload));
        }
    }

    sendIdentify() {
        const payload = {
            op: gatewayAlias.Identify,
            d: {
                token: this.token,
                intents: 531,
                properties: {
                    $os: "Android",
                    $browser: Pkg.name,
                    $device: `${Pkg.name} v${Pkg.version}`
                }
            }
        }

        this.ws.send(JSON.stringify(payload));
    }
}