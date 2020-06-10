const Discord = require('discord.js')
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
const fs = require('fs')
const warns = JSON.parse(fs.readFileSync('./warns.json'))
module.exports = class warn {
    constructor() {
        this.name = 'warn'
        this.alias = [`warn`, "w"],
            this.usage = `${config.prefix}warn`
    }
    async run(client, message, args) {
        message.delete()
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande ${emote.airhornDND}`)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(`Veuillez mentionner un membre ${emote.airhornDND}`)
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send(`Veuillez indiquer une raison ${emote.airhornDND}`)
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + ` a été warn pour ` + reason + `${emote.airhornYes}`)
        message.delete({ timeout: 100 })
        
    }
}