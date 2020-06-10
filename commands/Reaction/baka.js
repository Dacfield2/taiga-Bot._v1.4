const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = class baka {
    constructor() {
        this.name = 'baka',
            this.alias = ['baka']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle('**BAKA!**')
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter( `Baka!`)
      .setTimestamp()
  message.channel.send(lewdembed);
    })
}}