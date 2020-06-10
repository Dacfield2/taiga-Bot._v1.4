const config = require("../../config")
const Discord = require("discord.js")
const superagent = require("snekfetch");
const emote = require(`../../emote`).emoji
module.exports = class hug {
    constructor() {
        this.name = 'hug',
            this.alias = ['hug']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (message.mentions.users.first()) 
        superagent.get('https://nekos.life/api/v2/img/hug')
        .end((err, response) => {
        const embed = new Discord.RichEmbed()
        .setColor("#920280")
        .setDescription('**' + message.author.username + '** *fait un câlin à* **' + message.mentions.users.first().username + '** :heart:\n')
        .setImage(response.body.url)
        .setFooter("Hug")
        .setTimestamp()
        message.channel.send(embed)
    })

        if (!message.mentions.users.first()) {
        superagent.get('https://nekos.life/api/v2/img/hug')
        .end((err, response) => {
        const embed = new Discord.RichEmbed()
        .setColor("#920280")
        .setDescription('**' + message.author.username + '** *fait un câlin à* **' + "Taiga'Bot" + '** :heart:\n')
        .setImage(response.body.url)
        .setFooter("Hug")
        .setTimestamp()
         message.channel.send(embed)
        })
    }}
}
