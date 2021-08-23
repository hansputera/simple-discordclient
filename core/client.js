const WebSocketCore = require("./websocket");
const Raw = require("./raw");
const Collection = require("./collection");

module.exports = class Client {
    constructor(token) {
        this.readyAt = 0;
        this._initialized = false;
        this.ws = new WebSocketCore(token);
        this.events = this.ws.events;
        this.user = {};
        this.guilds = new Collection();

        const rawHandler = new Raw(this);
        rawHandler._reload();
        this.events.on("raw", raw => rawHandler.handleRaw(raw));
    }

    get uptime() {
        return this.readyAt ? Date.now() - this.readyAt : undefined;
    }

    login() {
        this.events.on("_state", connected => {
            if (connected) {
                this.ws.sendIdentify();
            }
        });
    }
}