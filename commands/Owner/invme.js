const config = require("../../config")
const Discord = require("discord.js")
module.exports = class squid {
    constructor() {
        this.name = 'inviteme',
            this.alias = ["invme"],
            this.usage = '.invme'
    }
    async run(bot, message, args) {
        if(!config.ownerID.includes(message.author.id)) return 
        let sv = bot.guilds.get(args[1])
        if (!sv) return message.channel.send(`Enter a valid guild id`)
        sv.channels.random().createInvite().then(a => message.author.send(a.toString())).catch(e => message.channel.send(`Error : ${e}`))

    }
}
