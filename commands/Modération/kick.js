const Discord = require("discord.js")
const emote = require("../../emote").emoji
const config = require("../../config")
module.exports = class kick {
    constructor() {
        this.name = 'kick'
        this.alias = ["expulse"],
            this.usage = `${config.prefix}kick`
    }
    async run(client, message, args) {
        message.delete()
        let args1 = args.slice(2).join(` `)
        let bUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
        
        let nopermbot =
            `${emote.airhornNo} Je n'ai pas la permission de kick`

        let nouser =
            `${emote.airhornNo} Veuillez mentionner un utilisateur `
        let noperm =
            `${emote.airhornNo} Vous n'avez pas la permission ! `
        let noreason =
            `${emote.airhornNo} Veuillez indiquez une raison à votre kick`

        let banmessage = `${emote.airhornYes} ${bUser} à été kick de ce serveur pour **${args1}** par ${message.author} `
        if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.channel.send(noperm)
        if (!message.guild.member(client.user).hasPermission(`KICK_MEMBERS`)) return message.channel.send(nopermbot)
        if (!bUser) return message.channel.send(nouser)
        if (bUser.id === message.author.id) return message.channel.send(`tu ne peux pas te kick`).then(async msg => {
            setTimeout(() => {
                msg.edit(`tu ne peux pas te kick lol`)
            }, 1000);
            setTimeout(() => {
                msg.edit(`tu ne peux pas te kick`)
            }, 8000);
        })
        if (bUser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition || bUser.id === message.guild.owner.id) return message.channel.send(`${emote.airhornNo} Désolé ${message.author} mais vous ne pouvez pas ban ${bUser}. Son rôle est plus élevé.`)

        if (!args1) return message.channel.send(noreason)

        message.channel.send(banmessage)
        var options = {
            maxUses: 1
          };  var invite = message.channel.createInvite(options).then(function(newInvite){
        bUser.send(`Vous avez été expuslé par ${message.author.tag} pour **${args1}** sur le serveur ${message.guild.name}\n${newInvite}`)
          })
            setTimeout(function () {
                message.guild.member(bUser).kick(args1)
            }, 500);
   

    }
}