const emote = require(`../../emote`).emoji
const Discord = require("discord.js")
const config = require("../../config")
module.exports = class softban {
    constructor() {
        this.name = 'softban',
            this.alias = ['soft', 'sb']
        this.usage = `${config.prefix}softban`
    }
    /**
     * 
     * @param {Discord.Client} bot 
     * @param {*} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete()
        let args1 = args.slice(2).join(` `)
        let Sbuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
        let nopermbot =

            `${emote.airhornNo} je n'ai pas la permission de ban `

        let nouser =

            `${emote.airhornNo} Veuillez mentionner un utilisateur `

        let noperm =

            `${emote.airhornNo} Vous n'avez pas la permission ! `


        let noreason =

            `${emote.airhornNo} Veuillez indiquez une raison à votre ban `

        let softbanembed =
            `${emote.airhornYes} ${Sbuser} à été softban de ce serveur par ${message.author} pour **${args1}** ${emote.airhornSoftban}`
        if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.channel.send(noperm)
        if (!message.guild.member(bot.user).hasPermission(`BAN_MEMBERS`)) return message.channel.send(nopermbot)
       
        if (!Sbuser) return message.channel.send(nouser)
        if (Sbuser.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition || Sbuser.id === message.guild.owner.id) return message.channel.send(`${emote.airhornNo} Désolé ${message.author} mais vous ne pouvez pas vous softban ${Sbuser}. Son rôle est plus élevé.`).then(msg => msg.delete(120 * 1000))
        if (Sbuser.id === message.author.id) return message.channel.send(`tu ne peux pas te softban ${emote.airhornNo}`).then(async msg => {
        })
        if (!args1) return message.channel.send(noreason)
        
        var options = {
            maxUses: 1
          };  var invite = message.channel.createInvite(options).then(function(newInvite){

        Sbuser.send(`Vous avez été softban de **${message.guild.name}** par ${message.author.tag} pour ${args1}\n${newInvite}`)
         message.channel.send(softbanembed)
          })
        setTimeout(function () {
           message.guild.ban(Sbuser, {days: 7, reason: args1}).then(
               message.guild.unban(Sbuser.id).catch(e => console.log(e.message)))
        }, 500);
    }
}



