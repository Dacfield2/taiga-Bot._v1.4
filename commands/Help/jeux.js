const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class gambling {
    constructor() {
        this.name = 'gambling'
        this.alias = ["g"],
            this.usage = `${config.prefix}gambling`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":game_die: Gambling - commandes :game_die:")
        .setColor("#af3434")
        .setThumbnail("https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif")
        .addField(`** - slots**`, `connaissez vous la roullette au casino? eh bien c'est la même chose mais sur Discord plutôt sympa non? *(Correct usage: ${config.prefix}slots)*`, true)
        .addField(`** - flip**`, `Retourne votre message *(Correct usage : ${config.prefix}flip [message])*`, true)
        .addField(`** - reverse**`, `Inverse votre message *(Correct usage : ${config.prefix}reverse [message])*`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}