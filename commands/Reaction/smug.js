const superagent = require(`snekfetch`);
const Discord = require('discord.js')

module.exports = class smug {
    constructor() {
        this.name = 'smug',
            this.alias = ['smug']
    }
    async run(client, message, args) {
        message.delete()
    superagent.get('https://nekos.life/api/v2/img/smug')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} est satisfait`)
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Smug`)
      .setTimestamp()
  message.channel.send(lewdembed);
    })
	
}}