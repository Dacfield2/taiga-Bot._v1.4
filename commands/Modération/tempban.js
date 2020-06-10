const Discord = require("discord.js")
const emote = require("../../emote").emoji
const config = require("../../config")
const ms = require("ms")
module.exports = class tempban {
    constructor() {
        this.name = 'tempban'
        this.alias = ["tempban"],
            this.usage = `${config.prefix}tempban`
    }
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(client, message, args) {
        message.delete()
        let bantime = args.slice(2).join(` `)
        let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);

        let nopermbot =
            `${emote.airhornNo} Je n'ai pas la permission de kick`

        let nouser =
            `${emote.airhornNo} Veuillez mentionner un utilisateur `
        let noperm =
            `${emote.airhornNo} Vous n'avez pas la permission ! `
        let noreason =
            `${emote.airhornNo} Veuillez indiquez une raison à votre kick`
        let banmessage =
            `${emote.airhornYes} ${bUser} à été banni par ${message.author} pendant **${bantime}** ${emote.airhornBan}`
        if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.channel.send(noperm)
        if (!message.guild.member(client.user).hasPermission(`BAN_MEMBERS`)) return message.channel.send(nopermbot)
        if (!bUser) return message.channel.send(nouser)
        if (bUser.id === message.author.id) return message.channel.send(`tu ne peux pas te ban`).then(async msg => {
            setTimeout(() => {
                msg.edit(`tu ne peux pas te ban lol`)
            }, 1000);
            setTimeout(() => {
                msg.edit(`tu ne peux pas te ban `)
            }, 8000);
        })
        if (bUser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition || bUser.id === message.guild.owner.id) return message.channel.send(`${emote.airhornNo} Désolé ${message.author} mais vous ne pouvez pas ban ${bUser}. Son rôle est plus élevé.`)

        if (!bantime) return message.channel.send(noreason)

        message.channel.send(banmessage)

        var options = {
            maxUses: 1
        }; var invite = message.channel.createInvite(options).then(function (newInvite) {
            bUser.send(`Vous avez été temporairement banni par ${message.author.tag} pendant **${bantime}** sur le serveur ${message.guild.name}`).then(msg => {
                setTimeout(function () {
                    message.guild.ban(bUser, { days: 7, reason: `Tempban by ${client.user.username}\n ${message.author.tag}'s request` })
                }, 500);
                setTimeout(() => {
                    message.guild.unban(bUser.id)
                    message.channel.send(`${emote.airhornYes} ${bUser} à été débanni`)
                    msg.edit(`Vous avez été temporairement banni par ${message.author.tag} pendant **${bantime}** sur le serveur ${message.guild.name}\n${newInvite}`)
                }, ms(bantime));
            })
        })
    }
}