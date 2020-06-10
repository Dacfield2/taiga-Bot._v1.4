const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'information'
        this.alias = [`i`],
            this.usage = `${config.prefix}information`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":information_source: Information - commandes :information_source:")
        .setColor("BLUE")
        .setThumbnail("https://thumbs.gfycat.com/FeminineWelloffHarrierhawk-size_restricted.gif")
        .addField(`** - serverinfo**${emote.airhornSearch}`, `Montre les informations du serveur *(Correct usage : ${config.prefix}serverinfo)*`, true)
        .addField(`** - userinfo**${emote.airhornSearch}`, `Montre les informations d'un utilisateur *(Correct usage : ${config.prefix}userinfo @username)*`, true)
        .addField(`** - botinfo**${emote.airhornSearch}`, `Montre les informations du bot *(Correct usage : ${config.prefix}botinfo)*`, true)
        .addField(`** - uptime**${emote.airhornClock}`, `Dis depuis quand le bot est actif *(Correct usage : ${config.prefix}up)*`, true)
        .addField(`** - version**`, `Donne la version du bot, celle de discord.js et de node.`, true)
        .addField(`** - spotify**${emote.airhornMusic}`, `Montre la musique qu'écoute une personne *(Correct usage : ${config.prefix}s @username)*`, true)
        .addField(`** - weather**:white_sun_small_cloud: `, `Montre le temps d'une ville *(Correct usage: ${config.prefix}weather [ville])*`, true)
        .addField("** - time**", "Donne l'heure exacte.", true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}