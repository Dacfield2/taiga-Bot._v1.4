const config = require("../../config")
const superagent = require("snekfetch");
const Discord = require("discord.js")
module.exports = class pat {
    constructor() {
        this.name = 'pat',
            this.alias = ['pat']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
          if (message.mentions.users.first()) 
          superagent.get('https://nekos.life/api/v2/img/pat')
              .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription('**' + message.author.username + '** *carresse la tête de* **' + message.mentions.users.first().username + '**')
            .setFooter(`Pat`)
            .setTimestamp()
        message.channel.send(lewdembed);
    })

          if (!message.mentions.users.first()) {
          superagent.get('https://nekos.life/api/v2/img/pat')
              .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription('**' + message.author.username + '** *carresse la tête de* **' + "Taiga'Bot" + '**')
            .setFooter(`Pat`)
            .setTimestamp()
        message.channel.send(lewdembed);
          })

    }}
}