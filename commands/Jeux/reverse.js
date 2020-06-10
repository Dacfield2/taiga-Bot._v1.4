const config = require("../../config")
const Discord = require("discord.js")
module.exports = class reverse {
    constructor() {
        this.name = 'reverse',
            this.alias = ['reverse']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (!args[1]) return message.channel.send('Correct usage: **d!reverse (text à reverser)**');
        let string = args.slice(1).join("")
        let sreverse = string.split("").reverse().join("")

        if (args[1] === 'd!reverse') {

            sreverse = `${args.join(' ')}..attend... Tu l'as cassé! ppf`

        }
        const reverseEmbed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setColor("RANDOM")
            .addField('Input: ', '```' + `${string}` + '```')
            .addField('Output: ', '```' + `${sreverse}` + '```')
        message.channel.send({ embed: reverseEmbed })
    }
}

