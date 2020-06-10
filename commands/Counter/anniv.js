const Discord = require('discord.js');
const emote = require(`../../emote`).emoji
const config = require("../../config")

module.exports = class anniv  {
    constructor() {
        this.name = 'anniv',
            this.alias = ['anniv'],
            this.usage = `${config.prefix}anniv`
    }
    async run(bot, message, args) {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("❌ Vous devez mentionnez un utilisateur pour lui souhaiter son anniversaire.")
            .setColor("#DD2E44")
        message.channel.send(error_mentions)
    }else {
        var anniversaire = new Discord.RichEmbed()
            .setDescription("🎉 <@" + message.author.id + "> te souhaite un joyeux anniversaire " + "<@" + `${member.user.id}` + "> !")
            .setImage("https://media.giphy.com/media/sIoUUXfh3W51K/giphy.gif")
            .setColor("#DD3333")
        message.channel.send(anniversaire)
    }
}}