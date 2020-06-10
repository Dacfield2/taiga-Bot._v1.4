const config = require("../../config")
const emote = require("../../emote").emoji
const Discord = require("discord.js")
module.exports = class roleall {
    constructor() {
        this.name = 'roleall',
            this.alias = ['rall'],
            this.usage = `${config.prefix}roleall`
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(client, message, args) {
        message.delete()
        var roleName = args.splice(1).join(' ');
        var grole = message.guild.roles.find(r => r.name === roleName);
        let loadingembed = new Discord.RichEmbed()
        .setColor("#21618C")
        .setDescription(`${emote.airhornLoading} ajout du rôle ${roleName} à tout les utilisateurs de ce serveur`)
        let sucessembed = new Discord.RichEmbed()
            .setColor("#15f153")
            .setDescription(`${emote.airhornAdd} le rôle **${roleName}** a été ajouté tout les utilisateurs de ce serveur ${emote.airhornYes}`)
        if (!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(`${emote.airhornNo} Vous n'avez pas la permissiond de faire ceci.`)
        if (!message.guild.member(client.user).hasPermission(`MANAGE_ROLES`)) return message.channel.send(`${emote.airhornNo} je n'ai pas la permission de gérer les rôles`)
        if (!roleName) return message.channel.send(`${emote.airhornNo} veuillez spécifier un role.`);
        if (!message.guild.roles.find(r => r.name === roleName)) return message.channel.send(`${emote.airhornNo} Aucun rôle ne porte ce nom. _Veuillez respecter les majuscules/mininuscules_`);
        message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(grole.id))
            message.channel.send(sucessembed)
            
    }

}