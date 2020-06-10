const emote = require(`../../emote`).emoji
const Discord = require("discord.js")
module.exports = class addrole {
  constructor() {
    this.name = 'addrole',
      this.alias = ['addr', 'add', 'ar'],
      this.usage = `addrole`
  }

  async run(client, message, args) {
    var user = message.mentions.members.first() || message.guild.members.get(args[1]); 
    var roleName = args.splice(2).join(' '); 
    var grole = message.guild.roles.find(r => r.name === roleName); 
    let sucessembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`${emote.airhornAdd} le rôle **${roleName}** a été ajouté à ${user} ${emote.airhornYes}`)
    if (!message.member.hasPermission(`MANAGE_ROLES`)) return message.channel.send(`${emote.airhornNo} Vous n'avez pas la permission de faire ceci.`)
    if (!message.guild.member(client.user).hasPermission(`MANAGE_ROLES`)) return message.channel.send(`${emote.airhornNo} je n'ai pas la permission de gérer les rôles`)
    if (!user) return message.channel.send(`${emote.airhornNo} veuillez mentionner un utilisateur.`); // I need User
    if (!roleName) return message.channel.send(`${emote.airhornNo} veuillez spécifier un role.`); //I need roleName
    if (!message.guild.roles.find(r => r.name === roleName)) return message.channel.send(`${emote.airhornNo} Aucun rôle ne porte ce nom. _Veuillez respecter les majuscules/mininuscules_`);
    if (user.roles.exists(r => r.name === roleName)) return message.channel.send(`${emote.airhornNo} cet utilisateur à déjà ce rôle`); //Already have rol


    await user.addRole(grole).then(() => message.channel.send(sucessembed)).catch((err) => message.channel.send(`${emote.airhornNo} Je peux pas rajouter ce role vérifier si j'ai bien la permission pour le grade souhaité`).then(() => console.log(err)));
  }
}