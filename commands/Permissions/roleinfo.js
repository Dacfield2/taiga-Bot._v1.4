const Discord = require(`discord.js`)
const config = require(`../../config`)
const emote = require(`../../emote`).emoji
module.exports = class roleinfo {
    constructor() {
        this.name = 'roleinfo',
            this.alias = ['ri']
        this.usage = `${config.prefix}roleinfo`
    }
    /**
     * 
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        let inline = true
        let perms = []
        message.delete()
        let role = args.slice(1).join(" ")
        if (!role) return message.channel.send(`${emote.airhornNo} merci de spécifier un rôle`);
        let gRole = message.guild.roles.find(roles => roles.name === role);
        if (!gRole) return message.channel.send(`${emote.airhornNo} Je ne parviens pas à trouver ce rôle vérifier l'orthographe du rôle que vous souhaitez recherché.`);

        const status = {
            false: `Non`,
            true: `Oui`
        }
        let color = ""
        if (gRole.hexColor) {
            color = gRole.hexColor
        } else {
            color = "#117A65"
        }
        if (gRole.hasPermission("ADMINISTRATOR")) {
            perms.push("Administrateur")
        }
        if (gRole.hasPermission("BAN_MEMBERS")) {
            perms.push("Bannir des membres");
        }

        if (gRole.hasPermission("KICK_MEMBERS")) {
            perms.push("Expulser des membres");
        }

        if (gRole.hasPermission("MANAGE_MESSAGES")) {
            perms.push("Gérer les messages");
        }

        if (gRole.hasPermission("MANAGE_CHANNELS")) {
            perms.push("Gérer les salons");
        }

        if (gRole.hasPermission("MENTION_EVERYONE")) {
            perms.push("Mentionner Everyone");
        }

        if (gRole.hasPermission("MANAGE_NICKNAMES")) {
            perms.push("Gérer les pseudos");
        }

        if (gRole.hasPermission("MANAGE_ROLES")) {
            perms.push("Gérer les rôles");
        }

        if (gRole.hasPermission("MANAGE_WEBHOOKS")) {
            perms.push("Gérer les Webhooks");
        }

        if (gRole.hasPermission("MANAGE_EMOJIS")) {
            perms.push("Gérer les Emojis");
        }


        if (perms.length == 0) {
            perms.push("Aucune permission sur cet utilisateur");
        }

        let roleemebed = new Discord.RichEmbed()
            .setColor(color)
            .addField(`ID :id: `, gRole.id, inline)
            .addField(`Nom`, gRole.name, inline)
            .addField(`Date`, gRole.createdAt)
            .addField(`Couleur`, gRole.hexColor, inline)
            .addField(`Membre`, gRole.members.size, inline)
            .addField(`Position`, gRole.position, inline)
            .addField(`Séparé des autres`, status[gRole.hoist], inline)
            .addField(`Mentionable`, status[gRole.mentionable], inline)
            .addField("Permissions: ", `${perms.join(', ')}`, true)
            .addField(`Role bot :robot: `, status[gRole.managed], inline)

        message.channel.send(roleemebed);
    }

}