const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class fun {
    constructor() {
        this.name = 'image'
        this.alias = ["image"],
            this.usage = `${config.prefix}image`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":rice_scene: Image - commandes :rice_scene:")
        .setThumbnail("https://img.phonandroid.com/2016/07/android-gif.gif")
        .addField("** - avatar**", "Montre la pdp de la personne mentionnée. *(Correct usage: t.avatar @username)*", true)
        .addField("** - cat:cat:**", "Envoie une photo de chat", true)
        .addField("** - dog:dog:**", "Envoie une photo de chien", true)
        .setColor("#451d83")
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}