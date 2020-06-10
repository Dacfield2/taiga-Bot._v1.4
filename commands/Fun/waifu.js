const Discord = require("discord.js");
const superagent = require("snekfetch");
     
module.exports = class waifu {
    constructor() {
        this.name = 'waifu',
            this.alias = ['waifu']
    }
    async run(client, message, args) {
        message.delete()
            if(message.guild === null)return;

            superagent.get('https://nekos.life/api/v2/img/waifu')
                .end((err, response) => {
              const lewdembed = new Discord.RichEmbed()
              .setDescription(message.author.toString() + " This is your waifu!")
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setURL(response.body.url);
          message.channel.send(lewdembed);
            })
          
        }}