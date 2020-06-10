const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'help'
        this.alias = [`h`, `aide`],
            this.usage = `${config.prefix}help`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setAuthor("Taiga'Bot - commands (85)", client.user.displayAvatarURL)
        .setColor("BLUE")
        .setDescription("Pour voir les commande dans un groupe utiliser: ```t.[groupe]```")
        .addField(":shield: admin", "8 commands.", true)
        .addField(":shield: moderation", "16 commands.", true)
        .addField(":lock: permissions", "2 commands.", true)
        .addField(":wrench: utility", "7 commands.", true)
        .addField(":information_source: information", "7 commands.", true)
        .addField(":smirk: fun", "9 commands.", true)
        .addField(":game_die: gambling", "3 commands.", true)
        .addField(":blue_heart: reaction", "6 commands.", true)
        .addField(":chart_with_upwards_trend: counter", "6 commands.", true)
        .addField(":rice_scene: image", "3 commands.", true)
        .addField(":tada: giveaway", "3 commands.", true)
        .addField(":underage: nsfw ", "14 commands.", true)
        .addField(":hand_splayed: welcomer", "1 information.", true)
        .addField("[Support]","[Click](https://discord.gg/mkDtEAs)")
        message.channel.send(embed)
    }
}