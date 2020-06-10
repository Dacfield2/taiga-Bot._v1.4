const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class fun {
    constructor() {
        this.name = 'fun'
        this.alias = ["f"],
            this.usage = `${config.prefix}fun`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":smirk: Fun - commandes :smirk:")
        .setColor("#451d83")
        .setThumbnail("https://media.giphy.com/media/1qa9CGDeuEN2w/giphy.gif")
        .addField(`** - 8ball**`, `Répond à toute vos questions! *(Correct usage: ${config.prefix}8ball [question])*`, true) 
        .addField('** - tu fais quoi?**', `Le bot dis ce qu'il fait *(Correct usage : ${config.prefix}tfq)*`, true)
        .addField(`** - say**`, `Fait parler le bot *(Correct usage : ${config.prefix}say [message])*`, true)
        .addField(`** - love**:heart:`, `Montre a combien une personne vous aime *(Correct usage: ${config.prefix}love @username)*`, true)
        .addField(`** - waifu**`, `Vous montre "votre" waifu.`, true)
        .addField(`** - ship**`, `Envoie une image avec les deux photos des deux personnes shipé. *(Correct usage: ${config.prefix}lc @username1 @username2)`, true)
        .addField(`** - meme**`, `Envoie un meme de reddit.`, true)
        .addField(`** - smoke**:smoking: `, `Fume une cigarette *(Correct usage : ${config.prefix}smoke)*`, true)
        .addField(`** - ascii**`, `texte stilysé *(Correct usage : ${config.prefix}ascii [texte])*`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}