const Discord = require('discord.js');

module.exports = class addchan {
    constructor() {
        this.name = 'addchan',
            this.alias = ['addchan']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            var error = new Discord.RichEmbed()
                .setDescription("❌ | Vous ne disposez pas des permissions nécessaires pour créer un channel.")
                .setColor("#DD2E44")
            message.channel.send(error)
        }
        if (!args[1]) {
        if (message.member.hasPermission("ADMINISTRATOR"))
            var error_args = new Discord.RichEmbed()
            .setDescription("❌ | Veuillez écrire un nom pour le channel. ")
            .setColor("#DD2E44")
            message.channel.send(error_args)
        }
        if (args[1]) {
        if (message.member.hasPermission("ADMINISTRATOR")) 
            var server = message.guild;
            var args = args.slice(1).join(" ")
            var channel_create = new Discord.RichEmbed()
                .setDescription(`✅ | Le salon ${args} est désormais ajouté.`)
                .setColor("#77B255")
            message.author.send(channel_create)
        server.createChannel(`${args}`);
        }
    }
}  
