const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class help {
    constructor() {
        this.name = 'moderation'
        this.alias = [`modo`],
            this.usage = `${config.prefix}moderation`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":shield: Moderation - commandes :shield:")
        .setColor("GREEN")
        .setThumbnail("https://img.xooimage.com/files75/f/0/5/modo-3-2d7c1dd.gif")
        .addField(`** - clear** ${emote.airhornDelete}`, `Supprime les messages de quelqu'un où des messages *(Correct usage : ${config.prefix}purge [@user] (nombre de messages à supprimer)*`, true)
        .addField(`** - clearchannel ${emote.airhornDelete}**`, `Supprime la totalité des messages du salon *(Correct usage: ${config.prefix}clearchannel)*`, true)
        .addField(`** - kick** ${emote.airhornBoot}`, `Kick un utilisateur du serveur *(Correct usage: ${config.prefix}kick @username [raison])*`, true)
        .addField(`** - vckick ${emote.airhornBoot}**`, `Expulse un membre du channel vocal *(Correct usage: ${config.prefix}vckick @username)*`) 
        .addField(`** - ban ${emote.airhornBan}**`, `Banni un utilisateur du serveur *(Correct usage: ${config.prefix}ban @username [raison])*`, true)
        .addField(`** - tempmute ${emote.airhornMute}**`, `Réduit temporairement au silence un utilisateur *(Correct usage : ${config.prefix}tempmute @username [temps])*`, true)
        .addField(`** - mute ${emote.airhornMute}**`, `Réduit au silence un utilisateur *(Correct usage : ${config.prefix}mute @username)*`, true)
        .addField(`** - unmute ${emote.airhornMute}**`, `Démute un utilisateur *(Correct usage : ${config.prefix}unmute @username)*`, true)
        .addField(`** - lockdown** ${emote.airhornLock}`, `Bloque l'accès au salon où la commande est utilisé *(Correct usage : ${config.prefix}lockdown [temps])*`, true)
        .addField(`** - warn**`, `Met un avertissement sur le membre *(Correct usage : ${config.prefix}warn @username [raison])*`, true)
        .addField(`** - ban ${emote.airhornBan}**`, `Banni un utilisateur du serveur *(Correct usage: ${config.prefix}ban @username [raison])*`, true)
        .addField(`** - softban ${emote.airhornSoftban}**`, `Softban un membre [Ban, unban un utilisateur] *(Correct usage : ${config.prefix}softban @username [raison])*`, true)
        .addField(`** - tempban ${emote.airhornBanhammer}**`, `Banni temporairement un utilisateur *(Correct usage : ${config.prefix}tempban @username [temps])*`, true)
        .addField(`** - unban ${emote.airhornRemove}**`, `Débanni un utilisateur *(Correct usage: ${config.prefix}unban [ID](https://support.discordapp.com/hc/fr/articles/206346498-O%C3%B9-trouver-l-ID-de-mon-compte-utilisateur-serveur-message))*`, true)
        .addField(`** - warninfo**`, `Montre les avertissement du membre *(Correct usage : ${config.prefix}wi @username)*`, true)
        .addField(`** - unwarn**`, `Retire un avertissement au membre *(Correct usage : ${config.prefix}uw @username)*`, true)
        message.author.send(embed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}