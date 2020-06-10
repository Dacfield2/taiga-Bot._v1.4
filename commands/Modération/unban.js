const Discord = require("discord.js")
const moment = require("moment")
const config = require("../../config")
const emote = require("../../emote").emoji
module.exports = class unban {
    constructor() {
        this.name = 'unban',
            this.alias = ['deban'],
            this.usage = `${config.prefix}unban`
    }
    /**
   * @param {Discord.Client} bot 
   * @param {Discord.Message} message 
   * @param {*} args 
   */
    async run(bot, message, args) {
        message.delete()
        let bannedMember = await bot.fetchUser(args[1])
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${emote.airhornNo} Vous n'avez pas la permission de faire ceci.`)
        if (!bannedMember) return message.channel.send(`${emote.airhornNo} merci de spécifier un user ID`)

        let reason = args.slice(2).join(" ")
        if (!reason) reason = "No reason given!"

        if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(`${emote.airhornNo} Je n'ai pas la permission d'unban des personnes`)
        try {
            message.guild.unban(bannedMember, { reason: reason })
            message.channel.send(`**${bannedMember.tag}** à été unban de ce serveur ${emote.airhornYes}`)
        } catch (e) {
            console.log(e.message)

        }
     }}