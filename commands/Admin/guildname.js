const Discord = require('discord.js');

module.exports = class guildname {
    constructor() {
        this.name = 'guildname',
            this.alias = ['guildname', 'gn']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        var args = args.slice(1).join(" ").split(',')
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            var error_permission = new Discord.RichEmbed()
                .setDescription("❌ | Vous ne disposez pas des permissions nécessaires pour changer le nom du serveur.")
                .setColor("#DD2E44")
            message.channel.send(error_permission)
        }
        if (!args[0]) {
        if (message.member.hasPermission("ADMINISTRATOR"))
            var error_args = new Discord.RichEmbed()
                .setDescription("❌ | Veuillez écrire un nom pour le serveur. ")
                .setColor("#DD2E44")
            message.channel.send(error_args)
        }
        if (args[0]) {
        if (message.member.hasPermission("ADMINISTRATOR")) 
        message.guild.setName(`${args}`)
        var successEmbed = new Discord.RichEmbed()
                .setDescription(`:white_check_mark: | Le nom du serveur a bien été changé en ${args}`)
                .setColor('#77B255')
        message.channel.send(successEmbed)
    }}
}
