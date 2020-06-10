const config = require("../../config")

module.exports = class squid {
    constructor() {
        this.name = 'server list Volgar',
            this.alias = ["sl"],
            this.usage = `${config.prefix}sl`
    }
    async run(bot, message, args) {
        if(!config.ownerID.includes(message.author.id)) return 
        message.delete()
        const guildArray = bot.guilds.map((guild) => {
            return `${guild.name} : ${guild.id}`
        })

        message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
    }
}