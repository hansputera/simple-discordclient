module.exports = class Guild {
    constructor(guild) {
        this.id = guild.id;
        this.name = guild.name;
        this.mfa_level = guild.mfa_level;
        this.members = guild.members;
        this.stickers = guild.stickers;
        this.verification_level = guild.verification_level;
        this.roles = guild.roles;
        this.systemChannelID = guild.system_channel_id;
        this.region = guild.region;
        this.locale = guild.preferref_locale;
        this.threads = guild.threads;
        this.emojis = guild.emojis;
        this.rulesChannelID = guild.rules_channel_id;
        this.ownerID = guild.owner_id;
        this.icon = guild.icon;
        this.afkChannelID = guild.afk_channel_id;
    }

    iconURL(size = 1024, extension = "png") {
        if (!sizes_avatar.includes(size.toString())) size = 1024;
        if (!extensions_avatar.includes(extension)) extension = "png";
        return `${cdn_url}icons/${this.id}/${this.icon}.${extension}?size=${size}`;
    }
}