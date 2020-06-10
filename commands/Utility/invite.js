const config = require("../../config")
const Discord = require("discord.js")
module.exports = class invite  {
    constructor() {
        this.name = 'invite',
            this.alias = ['inv'],
            this.usage = `${config.prefix}invite`
    }
/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {*} args 
 */
    async run(bot, message, args) {
        message.delete()
        const embed = new Discord.RichEmbed()
        .setColor('RED')
        .setThumbnail(bot.user.displayAvatarURL)
        .setAuthor( "Invitation")
        .addField("Hey, si tu veux inviter le bot clique sur ce lien", "[Clique ici pour inviter le bot](https://discordapp.com/oauth2/authorize?client_id=654503942377570345&scope=bot&permissions=536346103) ")
        .addField("Voici le lien du support discord du bot si tu as besoin d'aide", "[Clique ici pour rejoindre le discord](https://discord.gg/mkDtEAs)")
        .setTimestamp()
        .setFooter(bot.user.username)
        message.channel.send(embed)
    }}