const Discord = require('discord.js');
const emote = require(`../../emote`).emoji
const config = require('../../config')

module.exports = class bvn  {
    constructor() {
        this.name = 'bvn',
            this.alias = ['bvn'],
            this.usage = `${config.prefix}bvn`
    }
/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {*} args 
 */
    async run(bot, message, args) {
        message.delete()
        const member = message.mentions.members.first();
        if (!member) {
            var error_mentions = new Discord.RichEmbed()
                .setDescription("❌ Vous devez mentionner un utilisateur pour lui souhaiter la bienvenue.")
                .setColor("DD2E44")
            message.channel.send(error_permissions)
        }else {
            var bienvenue = new Discord.RichEmbed()
                .setDescription(":confetti_ball: Bienvenue <@" + `${member.user.id}` + "> ! :confetti_ball: sur" +  `${message.guild.name}`)
                .setColor("RANDOM")
            message.channel.send(bienvenue)
            message.delete()
        }
    }
}