const Discord = require(`discord.js`)
const ms = require(`ms`)
const emote = require(`../../emote`).emoji

module.exports = class tempmute {
  constructor() {
    this.name = 'tempmute',
      this.alias = ['temp', 'tm'],
      this.usage = '.tempmute'
  }

  async run(bot, message, args) {
    let mutetime = args.slice(2).join(` `)
    let muterole = message.guild.roles.find(roles => roles.name === `Muted`);
    let tomute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);

    let nopermbot = 
      
      `${emote.airhornNo} Je n'ai pas la permission de mute `
       
    let nouser = 
      
      `${emote.airhornNo} Veuillez mentionner un utilisateur `

    let nopetime =

      `${emote.airhornNo} Veuillez indiqué un temp a votre mute`
      
      
    let noperm = 
      
      `${emote.airhornNo} Vous n'avez pas la permission ! `
          
    let tempmuteembed = 

      `${emote.airhornYes} ${tomute} à été temporairement réduit au silence par ${message.author} pendant ${mutetime} ${emote.airhornMute}`
    message.delete()
    if (!muterole) return message.channel.send(`Je ne trouve pas le rôle \`Muted\` merci de faire la commande \`t.verify\` pour vérifier les rôles/salons`)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm)
    if (!nopetime) return message.reply(nopetime)
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(nopermbot)
    if (!tomute) return message.reply(nouser);
    if (tomute.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition || tomute.id === message.guild.ownerID) return message.channel.send(`${emote.airhornNo} Désolé ${message.author} mais vous ne pouvez pas vous tempmute ${tomute}. Son rôle est plus élevé.`)

    await (tomute.addRole(muterole.id));
    message.channel.send(tempmuteembed);

    setTimeout(function () {
      tomute.removeRole(muterole.id);
      message.channel.send(`${emote.airhornYes} <@${tomute.id}> a été unmute`);
    }, ms(mutetime));

  }
}
