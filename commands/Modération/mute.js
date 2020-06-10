const Discord = require("discord.js")
const emote = require("../../emote").emoji
const config = require("../../config")
module.exports = class mute {
    constructor() {
        this.name = 'mute'
        this.alias = ["mute"],
            this.usage = `${config.prefix}mute`
    }
    async run(client, message, args) {
        message.delete()
        let args1 = args.slice(2).join(` `)
        let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
        let muterole = message.guild.roles.find(roles => roles.name === 'Muted')
        let nopermbot =
            `${emote.airhornNo} Je n'ai pas la permission de mute`

        let nouser =
            `${emote.airhornNo} Veuillez mentionner un utilisateur `
        let noperm =
            `${emote.airhornNo} Vous n'avez pas la permission ! `
        let noreason =
            `${emote.airhornNo} Veuillez indiquez une raison à votre mute`

        let mutemessage = 
        `${emote.airhornMute} ${bUser} à été réduit au silence par ${message.author} pour **${args1}**`
        if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send(noperm)
        if (!message.guild.member(client.user).hasPermission(`MANAGE_ROLES`)) return message.channel.send(nopermbot)
        if (!bUser) return message.channel.send(nouser)
        if (bUser.id === message.author.id) return message.channel.send(`tu ne peux pas te mute ${emote.airhornNo}`).then(async msg => {
        })
        if (bUser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition || bUser.id === message.guild.ownerID) return message.channel.send(`${emote.airhornNo} Désolé ${message.author} mais vous ne pouvez pas mute ${bUser}. Son rôle est plus élevé.`)

        if (!args1) return message.channel.send(noreason)

        message.channel.send(mutemessage)
        bUser.send(`Vous avez été réduit au silence par **${message.author.tag}** pour **${args1}**`)
        await bUser.addRole(muterole.id)

     }
}