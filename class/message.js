const User = require("./user");

module.exports = class Message {
    constructor(msg) {
        this.id = msg.id;
        this.content = msg.content;
        this.channelID = msg.channel_id;
        this.author = new User(msg.author);
        this.guildID = msg.guild_id;
        this.pinned = msg.pinned;
        this.tts = msg.tts;
        this.date = new Date(msg.timestamp);
        this.nonce = msg.nonce;
        this.mentions = msg.mentions;
        this.mentionEveryone = msg.mention_everyone;
        this.member = msg.member;
        this.lastEdited = msg.edited_timestamp;
        this.components = msg.components;
        this.attachments = msg.attachments;
    }
}