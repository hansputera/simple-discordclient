const Collection = require("./collection");
const { readdirSync } = require("fs");
const path = require("path");

module.exports = class RawHandle {
    constructor(client) {
        this.client = client;
        this.events = new Collection();
    }

    _reload() {
        this.events.clear();
        const directory = path.join(__dirname, "..", "events");
        for (const event of readdirSync(directory)) {
            const event_file = require(path.join(directory, event));
            this.events.set(event_file.name, event_file);
        }
    }

    handleRaw(rawData) {
        this.events.toArray().forEach((event) => {
            if (event.value.filter(this.client, rawData)) {
                this.client.events.emit(event.value.name, event.value.handle(this.client, rawData));
            }
        });
    }
}