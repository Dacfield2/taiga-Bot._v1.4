const discord = require('discord.js');
const superagent = require('superagent')

module.exports = class fourk {
    constructor() {
        this.name = '4k',
            this.alias = ['4k']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      message.channel.send({
        embed: {
          title: `Si l'image n'apparait pas, cliquez ici.`,
          description: `Demande de ${message.author.tag} | [Discord](https://discord.gg/mkDtEAs)`,
          url: response.body.message,  
          color: 6192321,
          image: {
            file: response.body.message,
            url: response.body.message
          },
          footer: {
            icon_url: message.author.avatarURL,
            text: `${message.author.tag} | 4k`
          }
        }   
      });
    })
  } else {
    message.channel.send("This isn't NSFW channel!")
    message.delete()
  }
}}