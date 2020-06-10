const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class report {
    constructor() {
        this.name = 'report'
        this.alias = [`report`, `r`],
            this.usage = `${config.prefix}report`
    }
    async run(client, message, args) {
        message.delete()
        let args1 = args.slice(2).join(` `)
        let target = message.mentions.members.first() || message.guild.members.get(args[0])

    let reason = args.slice(1).join(` `)
    let reason1 = args.slice(2).join(` `)
    if(!reason) return message.channel.send(`Donner une raison du report **${target.user.tag}**`).then(m => m.delete(15000))

    let sChannel = message.guild.channels.find(x => x.name === `reports`)

    if (!target)
    message.channel.send(`Votre report a bien été envoyer au staff. ${emote.airhornYes}`).then(m => m.delete(15000))
    sChannel.send(`${emote.airhornPing}**${message.author.tag}** has reported **${reason}**.`).then(async msg => {
        await msg.react(`✅`)
        await msg.react(`❌`)
    })
    if (target)
    message.channel.send(`Votre report a bien été envoyer au staff. ${emote.airhornYes}`).then(m => m.delete(15000))
    sChannel.send(`${emote.airhornPing}**${message.author.tag}** has reported **${target.user.tag}** for **${reason1}**.`).then(async msg => {
        await msg.react(`✅`)
        await msg.react(`❌`)
    })

}}
