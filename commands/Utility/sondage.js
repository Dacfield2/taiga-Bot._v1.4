const Discord = require('discord.js');
const emote = require(`../../emote`).emoji
const config = require(`../../config`)

module.exports = class sondage {
    constructor() {
        this.name = 'sondage',
            this.alias = ['sondage']
    }
    async run(client, message, args) {
        message.delete()
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription(`${emote.airhornNo} Vous ne disposez pas les permissions nécessaires pour faire un sondage.`)
            .setColor(`#E24C4B`)
        message.channel.send(error_permissions)
    } else {
    if(message.member.hasPermission(`MANAGE_MESSAGES`)) {
        let arg = message.content.split(` `).slice(1);
        let thingToEcho = arg.join(` `)
        var sondage = new Discord.RichEmbed()
                .setTitle(`📊 Sondage :`)
                .addField(thingToEcho, `Répondez dès maintenant au sondage avec ${emote.airhornYes} ou ${emote.airhornNo}!`)
                .setColor(`#00BFFF`)
            message.channel.send(sondage)
        .then(function (message){
            message.react(`583316517169659916`)
            message.react(`583316071042514944`)
        })
        message.delete()
    }
}}}