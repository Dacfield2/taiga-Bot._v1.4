const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = class eroneko {
    constructor() {
        this.name = 'eroneko',
            this.alias = ['eroneko', 'eron']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
  if (message.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/erokemo')
    .end((err, response) => {
      message.channel.send({
        embed: {
          title: `Si l'image n'apparait pas, cliquez ici.`,
          description: `Demande de ${message.author.tag} | [Discord](https://discord.gg/mkDtEAs)`,
          url: response.body.url,  
          color: 6192321,
          image: {
            file: response.body.url,
            url: response.body.url
          },
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.tag} | eroneko`
          }
        }   
      });
    })
  } else {
    message.channel.send("This isn't NSFW channel!")
    message.delete()
  }
}}