const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'utility'
        this.alias = [`u`],
            this.usage = `${config.prefix}utility`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":wrench: Utility - commandes :wrench:")
        .setColor("YELLOW")
        .addField(`** - help **${emote.airhornSmile}`, `Envoie le message avec toute les commandes`, true)
        .addField(`** - ping**${emote.airhornPing}`, `Test mon ping *(Correct usage: ${config.prefix}ping)*`, true)
        .addField(`** - invite**`, `Donne un lien d'invitation pour inviter le bot sur votre serveur et donne le lien discord du support.`, true)
        .addField(`** - annonce**`, `Fais un annonce. *(Correct usage: ${config.prefix}annonce [Votre message])*`, true)
        .addField(`** - sondage**`, `fais un sondage avec émoji. *(Correct usage: ${config.prefix}sondage [votre question])*`, true)
        .addField(`** - animesearch**${emote.airhornSearch}`, `Recherche l'anime donné *(Correct usage: ${config.prefix}as [nom de l'anime])*`, true)
        .addField(`** - report**${emote.airhornBalance}`, `Report au staff une personne qui a été méchante *(Correct usage : ${config.prefix}report [reason] / ${config.prefix}report @username [reason])*`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))

    }
}