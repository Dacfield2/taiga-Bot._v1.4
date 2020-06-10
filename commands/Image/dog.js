const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = class dog {
    constructor() {
        this.name = 'dog',
            this.alias = ['dog']
    }

    async run(client, message, args) {
        message.delete()
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.RichEmbed()
  .setTitle("Random dog")
  .setImage(response.body.url)
  .setColor(`RANDOM`)
  .setFooter(`woof`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};