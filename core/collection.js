module.exports = class Collection extends Map {
    toArray() {
        return Array.from(this, ([name, value]) => ({ name, value }));
    }

    first() {
        return this.toArray()[0];
    }

    last() {
        return this.toArray()[this.toArray().length - 1];
    }
}