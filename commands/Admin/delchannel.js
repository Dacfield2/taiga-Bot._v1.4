const config = require("../../config")
const Discord = require("discord.js")
module.exports = class delchannel {
    constructor() {
        this.name = 'delchannel'
            this.alias = ['dc', 'delchan']
            this.usage = `delchannel`
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(client, message, args) {
        message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        var error = new Discord.RichEmbed()
            .setDescription("❌ | Vous ne disposez pas des permissions nécessaires pour supprimer ce channel.")
            .setColor("#DD2E44")
        message.channel.send(error)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.delete()
    var channel_delete = new Discord.RichEmbed()
        .setDescription(`✅ | Le salon où vous avez effectué la commande **${config.prefix}del-channel** est désormais supprimé.`)
        .setColor("#77B255")
    message.author.send(channel_delete)
    }
  }
}
