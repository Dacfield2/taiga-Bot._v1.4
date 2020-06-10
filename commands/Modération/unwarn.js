const Discord = require('discord.js')
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
const fs = require('fs')
const warns = JSON.parse(fs.readFileSync('./warns.json'))
module.exports = class unwarn {
    constructor() {
        this.name = 'unwarn'
        this.alias = [`unwarn`, "uw"],
            this.usage = `${config.prefix}unwarn`
    }
    async run(client, message, args) {
        message.delete()
        let member = message.mentions.members.first()
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande.`)
        if (!member) return message.channel.send(`Membre introuvable`)
        if (!member.manageable) return message.channel.send(`Je ne peux pas unwarn ce membre.`)
        if (!warns[member.id] || !warns[member.id].length) return message.channel.send(`Ce membre n'a actuellement aucun warns.`)
        warns[member.id].shift()
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(`Le dernier warn de ` + member + ` a été retiré ${emote.airhornYes}`)
        message.delete(150000)
    }
}