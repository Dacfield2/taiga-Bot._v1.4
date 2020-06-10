const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class ban {
    constructor() {
        this.name = 'ban'
        this.alias = [`ban`],
            this.usage = `${config.prefix}ban`
    }
    async run(client, message, args) {
        message.delete()
        let args1 = args.slice(2).join(` `)
        let bUser = message.mentions.members.first()
        if (!message.guild.member(client.user).hasPermission(`BAN_MEMBERS`)) return message.channel.send(nopermbot)
        if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`${emote.airhornNo}Vous n'avez pas la permission de faire ceci.`)
        if (!bUser) {
            message.channel.send(`Qui voulez-vous bannir ? Vous avez 30 secondes pour répondre \nSi vous voulez annuler écrivez "cancel"`)
            try {
                let filterUser = m => m.author.id === message.author.id
                var responseUser = await message.channel.awaitMessages(filterUser, {
                    maxMatches: 1,
                    time: 30000,
                    errors: ['time']
                })
            } catch (err) {
                console.error(err);
                return message.channel.send(`${emote.airhornNo}Les 30 secondes sont écoulées la commande est donc annulé.`);
            }
            if (responseUser.first().content === `cancel`) {
                return message.reply(`${emote.airhornYes}Commande annulé.`)
            }
        }
        if (!args1) {
            message.channel.send(`Pour quel raison voulez-vous le bannir ? Vous avez 30 secondes pour répondre \nSi vous voulez annuler écrivez "cancel"`)
            try {
                let filterReason = m => m.author.id === message.author.id
                var responseReason = await message.channel.awaitMessages(filterReason, {
                    maxMatches: 1,
                    time: 30000,
                    errors: ['time']
                })
            } catch (err) {
                console.error(err);
                return message.channel.send('Les 30 secondes sont écoulées la commande est donc annulé.');
            }
            if (responseReason.first().content === `cancel`) {
                return message.reply(`${emote.airhornYes}Commande annulé.`)
            }
        }
        if (responseUser && responseReason) {
             message.guild.ban(responseUser.first().mentions.members.first().id, { reason: responseReason.first().content, days: 7 })
            console.log(1)
            responseUser.first().mentions.members.first().send(`${emote.airhornBan} Vous avez été banni de ${message.guild.name} par ${message.author.tag} pour **${responseReason.first().content}**`)
            return message.channel.send(`**${responseUser.first().mentions.members.first().user.tag}** a été banni de ce serveur pour ${responseReason.first().content}`)
        } else if (responseReason) {
            message.guild.ban(bUser, { reason: responseReason.first().content, days: 7 })
            console.log(2)
            bUser.send(`${emote.airhornBan} Vous avez été banni de ${message.guild.name} par ${message.author.tag} pour **${responseReason.first().content}**`)

            return message.channel.send(`**${bUser.user.tag}** a été banni de ce serveur pour ${responseReason.first().content}`)

        } else {
            message.guild.ban(bUser, { reason: args1, days: 7 })
            console.log(3)
            bUser.send(`${emote.airhornBan} Vous avez été banni de ${message.guild.name} par ${message.author.tag} pour **${args1}**`)
            return message.channel.send(`**${bUser.user.tag}** a été banni de ce serveur pour ${args1} ${emote.airhornBan}`)
        }
    }
}