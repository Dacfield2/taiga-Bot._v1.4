const Discord = require('discord.js');
const emote = require(`../../emote`).emoji

module.exports = class annonce  {
    constructor() {
        this.name = 'annonce',
            this.alias = ['annonce'],
            this.usage = `annonce`
    }
/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {*} args 
 */
    async run(bot, message, args) {
        message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription(`${emote.airhornNo} Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.`)
            .setColor("#E24C4B")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");
        var annonce = new Discord.RichEmbed()
            .setTitle("📌 __Annonce :__")
            .setDescription(contenu)
            .setColor("#BE1931")
        message.channel.send(annonce)
        message.delete();
    }
}}