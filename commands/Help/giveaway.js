const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class Giveaway {
    constructor() {
        this.name = 'giveaway'
        this.alias = ["ga"],
            this.usage = `${config.prefix}giveaway`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":tada: Giveaway - commandes :tada:")
        .setColor("RED")
        .setThumbnail("https://sf2.viepratique.fr/wp-content/uploads/sites/5/2016/02/gif-cadeaux-410x410.gif")
        .addField("** - gstart :tada:**", `Crée un giveaway *(Correct usage: ${config.prefix}gstart [temp(s,m,h,d)] [Nombre de gagnant] [cadeau])*`)
        .addField(`** - gdel ${emote.airhornTrash}**`, `Supprime un giveaway en cour *(Correct usage: ${config.prefix}gdel [ID])*`)
        .addField(`** - greroll ${emote.airhornRefresh}**`, `Dis quelle personne a gagné le giveaway *(Correct usage: ${config.prefix}greroll [ID])*`)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}