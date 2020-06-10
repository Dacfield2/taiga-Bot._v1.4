const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'counter'
        this.alias = [`count`],
            this.usage = `${config.prefix}counter`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(`:chart_with_upwards_trend: Counter - commandes :chart_with_upwards_trend:`)
        .setColor(`#451d83`)
        .addField(`** - hug**${emote.airhornHug}`, `Fais un calin à la personne mentionnée *(Correct usage: ${config.prefix}hug @username)*`, true)
        .addField(`** - bvn**${emote.airhornAdorable}`, `Souhaite la bienvenue a un nouveau *(Correct usage: ${config.prefix}bvn @username)*`, true)
        .addField(`** - kiss**`, `Donne un bisous à la personne mentionnée *(Correct usage: ${config.prefix}kiss @username)*`,true)
        .addField(`** - bang**:gun:`, `Tire sur la personne mentionnée *(Correct usage: ${config.prefix}bang @username)*`,true)
        .addField('** - anniv :confetti_ball: **', `Souhaite un joyeux anniversaire a la personne mentionée. *(Correct usage: ${config.prefix}anniv @username)*`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}