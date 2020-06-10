const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'reaction'
        this.alias = [`reac`],
            this.usage = `${config.prefix}reaction`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":blue_heart: Reaction - commandes :blue_heart:")
        .setThumbnail("https://media.giphy.com/media/1BdJd24oEwvuSvXYb0/giphy.gif")
        .setColor("BLUE")
        .addField(`** - cry**:cry:`, `Pleure *(Correct usage: ${config.prefix}cry)*`,true)
        .addField(`** - blush**:blush:`, `Rougis *(Correct usage: ${config.prefix}blush @username)*`, true)
        .addField(`** - punch**`, `Frappe la personne mentionée *(Correct usage: ${config.prefix}punch @username)*`, true)
        .addField(`** - run**:rush:`, `Coure loin *(Correct usage: ${config.prefix}run)*`, true)
        .addField(`** - baka**`, `Envoie une image de manga en disant idiot.`, true)
        .addField(`** - smug**`, `Envoie une image avec une tete de satifaction.`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}