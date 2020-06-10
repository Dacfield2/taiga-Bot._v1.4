const Discord = require('discord.js')
const config = require('../../config')

module.exports = class version {
    constructor() {
        this.name = 'version',
            this.alias = [],
            this.usage = `version`
    }
     /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete()
        const Vembed = new Discord.RichEmbed()
        .setAuthor("Taiga'Bot - Bot version",bot.user.displayAvatarURL)
        .setDescription(`Version du bot: ${config.version}`)
        .addField(`**Version de node**:`, `${process.version}`, true)
        .addField(`**Version de Discord.js**:`, `v11.5.1`, true)
        message.channel.send(Vembed)
    }
}