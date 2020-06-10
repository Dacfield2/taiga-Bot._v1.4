const discord = require('discord.js');
const superagent = require('superagent')

module.exports = class neko {
    constructor() {
        this.name = 'neko',
            this.alias = ['neko']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
  if (message.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
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
            text: `${message.author.tag} | neko`
          }
        }   
      });
    })
  } else {
    message.channel.send("This isn't NSFW channel!")
    message.delete()
  }
}}