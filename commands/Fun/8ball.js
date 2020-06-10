const Discord = require('discord.js')
module.exports = class eightball {
    constructor() {
        this.name = '8ball',
            this.alias = ['8ball']
    }

    async run(bot, message, args) {
        message.delete()
        let args1 = message.content.substring(7)
        if (!args1) return message.channel.send("Ummmmm, quel est votre question? :rolling_eyes:")
        let answers = ["oui", "non", "peut-être", "bien sûr", "t'inquiete 😉", "sûrement", "je pense pas", "je crois pas", "sale poulpe", "peut-être pas", "boring..."]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("RANDOM")
            .addField("Question :", question)
            .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
}