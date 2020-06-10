const config = require("../../config")
const superagent = require("snekfetch");
const Discord = require("discord.js")
module.exports = class kiss {
    constructor() {
        this.name = 'kiss',
            this.alias = ['kiss']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (message.mentions.users.first()) 
        superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
        const embed = new Discord.RichEmbed()
        .setColor("#920280")
        .setDescription('**' + message.author.username + '** *fait un bisous à* **' + message.mentions.users.first().username + '** :heart:\n')
        .setImage(response.body.url)
        .setFooter("Kiss")
        .setTimestamp()
        message.channel.send(embed)
    
    })
        if (!message.mentions.users.first()) {
        superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
        const embed = new Discord.RichEmbed()
        .setColor("#920280")
        .setDescription('**' + message.author.username + '** *fait un bisous à* **' + "Taiga'Bot" + '** :heart:\n')
        .setImage(response.body.url)
        .setFooter("Kiss")
        .setTimestamp()
        message.channel.send(embed)
        })
    }}
}
