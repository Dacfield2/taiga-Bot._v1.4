const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = class cat {
    constructor() {
        this.name = 'cat',
            this.alias = ['cat']
    }

    async run(bot, message, args) {
        message.delete()

        let {
            body
        } = await superagent.get("http://aws.random.cat/meow");

        if (!{
                body
            }) return message.channel.send("Oh sorry, there was an error getting a cat picture....Please try again!"); //lgtm [js/trivial-conditional]

            const lewdembed = new Discord.RichEmbed()
            .setTitle("Random cat")
            .setImage(body.file)
            .setColor(`RANDOM`)
            .setFooter(`miaw`)
            .setURL(body.file);
          message.channel.send(lewdembed);
        }
}