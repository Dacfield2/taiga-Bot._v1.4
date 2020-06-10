const config = require("../../config.js")
const Discord = require("discord.js")
const emote = require("../../emote").emoji
module.exports = class check {
    constructor() {
        this.name = "check",
            this.alias = ["cp", "checkperm", "showmeurperm"],
            this.usage = `${config.prefix}check`
    }
    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(client, message, args) {
        message.delete()
        const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

        let permissions = []
        let permbot = message.guild.me
        if (permbot.hasPermission("ADMINISTRATOR")) {
            permissions.push("Administrateur");
        }

        if (permbot.hasPermission("BAN_MEMBERS")) {
            permissions.push("Bannir des membres");
        }

        if (permbot.hasPermission("KICK_MEMBERS")) {
            permissions.push("Expulser des membres");
        }

        if (permbot.hasPermission("MANAGE_MESSAGES")) {
            permissions.push("Gérer les messages");
        }

        if (permbot.hasPermission("MANAGE_CHANNELS")) {
            permissions.push("Gérer les salons");
        }

        if (permbot.hasPermission("MENTION_EVERYONE")) {
            permissions.push("Mentionner Everyone");
        }

        if (permbot.hasPermission("MANAGE_NICKNAMES")) {
            permissions.push("Gérer les pseudos");
        }

        if (permbot.hasPermission("MANAGE_ROLES")) {
            permissions.push("Gérer les rôles");
        }

        if (permbot.hasPermission("MANAGE_WEBHOOKS")) {
            permissions.push("Gérer les Webhooks");
        }

        if (permbot.hasPermission("MANAGE_EMOJIS")) {
            permissions.push("Gérer les Emojis");
        }


        if (permissions.length == 0) {
            permissions.push("Je n'ai aucune permission sur ce serveur");
        }
        let embed = new Discord.RichEmbed()
        .setColor(randomColor)
        .addField("Mes permissions sur ce serveur :", permissions.join('\n'))
        message.channel.send(embed)
    }
}