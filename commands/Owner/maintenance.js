const Discord = require('discord.js');
const emote = require(`../../emote`).emoji

module.exports = class maintenace  {
    constructor() {
        this.name = 'maintenance',
            this.alias = ['maintenance'],
            this.usage = `maintenance`
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
        var maintenance = new Discord.RichEmbed()
            .setTitle(" __Maintenance :__")
            .setDescription(contenu)
            .setImage('https://i.imgur.com/cyovqXF.jpg')
            .setColor("BLUE")
        message.channel.send(maintenance)
        message.delete();
    }
}}