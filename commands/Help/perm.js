const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'permission'
        this.alias = [`perm`],
            this.usage = `${config.prefix}permission`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":lock: Permission - commandes :lock:")
        .addField('** - roleinfo**', `Donne des infos sur le role mentionné *(Correct usage : ${config.prefix}ri @role)*`, true)
        .addField('** - checkperm**', `Montre toute les permissions qu'a le bot sur le serveur.`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}