const emote = require("../../emote").emoji
const config = require("../../config")
module.exports = class unmute {
    constructor() {
        this.name = 'unmute'
        this.alias = ["unmute", 'um'],
            this.usage = `${config.prefix}unmute`
    }
    async run(client, message, args) {
        message.delete()
        let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
        let mutedrole = message.guild.roles.find(roles => roles.name === "Muted")
        let nopermbot =
            `${emote.airhornNo} Je n'ai pas la permission de mute`

        let nouser =
            `${emote.airhornNo} Veuillez mentionner un utilisateur `
        let noperm =
            `${emote.airhornNo} Vous n'avez pas la permission ! `
        let mutemessage =
            `${emote.airhornSpeaker} ${user} à été unmute par ${message.author} `
        if (!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(noperm)
        if (!message.guild.member(client.user).hasPermission(`MANAGE_ROLES`)) return message.channel.send(nopermbot)
        if (!user) return message.channel.send(nouser)
        message.channel.send(mutemessage)
        await user.removeRole(mutedrole.id)


    }
}
