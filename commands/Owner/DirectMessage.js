const config = require("../../config.js")
const emote = require("../../emote").emoji
const Discord = require("discord.js")
module.exports = class dm {
    constructor() {
        this.name = "dm",
            this.alias = ["mp", "pm"],
            this.usage = `${config.prefix}dm`
    }
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(client, message, args) {
        if (!config.ownerID.includes(message.author.id)) return
        message.delete()
        let DMuser = message.mentions.members.first() || message.guild.members.get(args[1])
        let args1 = args.slice(2).join(" ")
        if (!DMuser) return message.reply("specify a user.").catch(error => console.log(error.message))
        if (!args1) return message.reply("specify a reason.").catch(error => console.log(error.message))
        DMuser.send(args1).then(message.channel.send(`${emote.airhornYes} Success **${DMuser.user.username}** was pm for **${args1}**`).then(msg => msg.delete(2500))).catch(e => message.channel.send(`Error: \`${e.message}\``))
    }
}