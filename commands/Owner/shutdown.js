const config = require("../../config")
const Discord = require("discord.js")
module.exports = class squid {
    constructor() {
        this.name = 'shutdown',
            this.alias = ["shut"],
            this.usage = 'shutdown'
    }
    /**
      
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete(1)
        if (!config.ownerID.includes(message.author.id)) return
        bot.user.setActivity("Maintenance...", { type: "STREAMING", url: "https://twitch.tv/volgariii" })
        message.channel.send("Maintenance... ").then(r => {
            process.exit(0)
        })
    }
}