const emote = require(`../../emote`).emoji
const config = require("../../config")
const Discord = require("discord.js")
module.exports = class removerole {
  constructor() {
    this.name = 'removerole',
      this.alias = ['remr', 'remove', 'rr'],
      this.usage = `${config.prefix}removerole`
  }

  async run(client, message, args) {

    var user = message.mentions.members.first() || message.guild.members.get(args[1]); 
    var roleName = args.splice(2).join(' '); //Role Name
    var grole = message.guild.roles.find(r => r.name === roleName); //Role Search
    let sucessembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setDescription(`${emote.airhornRemove} le rôle **${roleName}** a été enlevé à ${user} ${emote.airhornYes}`)
    message.delete()
    if (!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(`${emote.airhornNo} Vous n'avez pas la permissiond de faire ceci.`)
    if (!message.guild.member(client.user).hasPermission(`MANAGE_ROLES`)) return message.channel.send(`${emote.airhornNo}`)
    if (!user) return message.channel.send(`${emote.airhornNo} veuillez mentionner un utilisateur.`); // I need User
    if (!roleName) return message.channel.send(`${emote.airhornNo} veuillez spécifier un role.`); //I need roleName
    if (!message.guild.roles.find(r => r.name === roleName)) return message.channel.send(`${emote.airhornNo} Aucun rôle ne porte ce nom. _Veuillez respecter les majuscules/mininuscules_`);
    if (!user.roles.exists(r => r.name === roleName)) return message.channel.send(`${emote.airhornNo} cet utilisateur n'a pas ce rôle`); //Already have role


    await user.removeRole(grole).then(() => message.channel.send(sucessembed)).catch((err) => message.channel.send(`${emote.airhornNo}  Je peux pas rajouter ce role vérifier si j'ai bien la permission pour le grade souhaité`).then(() => console.log(err)));
  }
}
