const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'admin'
        this.alias = [`a`],
            this.usage = `${config.prefix}admin`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setColor("RED")
        .setThumbnail("https://i.pinimg.com/originals/e7/da/d7/e7dad789c2acd076ab3de961c0d43b45.gif")
        .setTitle(":shield: Administration - commandes :shield:")
        .addField(`** - roleall**`, `Rajoute un role à tout les membres *(Correct usage: ${config.prefix}roleall [role sans mention])*`, true)
        .addField(`** - removeall**${emote.airhornRemove}`, `Enlève un role à tout les membres *(Correct usage: ${config.prefix}removeall [role sans mention])*`, true)
        .addField(`** - addrole**${emote.airhornAdd}`, `Rajoute un role à un utilisateur *(Correct usage: ${config.prefix}addrole @username [role sans mention])*`, true)
        .addField(`** - removerole**${emote.airhornRemove}`, `Enlève un role à un utilisateur *(Correct usage: ${config.prefix}removerole @username [role sans mention])*`, true)
        .addField(`** - delchannel**${emote.airhornDelete}`, `Supprime le channel ou a été fais la commande.`, true)
        .addField(`** - addchannel**${emote.airhornAdd}`, `Crée un channel *(Correct usage: ${config.prefix}addchan [nom du channel])*`, true)
        .addField(`** - guildname**`, `Change le nom du serveur *(Correct usage: ${config.prefix}guildname [nouveau nom du serveur])*`, true)
        .addField(`** - setregions**`, `Change la région du serveur`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))

    }
}    