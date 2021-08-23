const { sizes_avatar, extensions_avatar, cdn_url } = require("../config");

module.exports = class User {
    constructor(userData) {
        this.username = userData.username;
        this.id = userData.id;
        this.flags = userData.flags;
        this.isBot = userData.bot;
        this.avatar = userData.avatar;
        this.verified = userData.verified;
        this.discriminator = userData.discriminator;
        this.tag = `${userData.username}#${userData.discriminator}`;
    }

    avatarURL(size = 1024, extension = "png") {
        if (!sizes_avatar.includes(size.toString())) size = 1024;
        if (!extensions_avatar.includes(extension)) extension = "png";
        return `${cdn_url}avatars/${this.id}/${this.avatar}.${extension}?size=${size}`;
    }
}