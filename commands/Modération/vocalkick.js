const emote = require("../../emote").emoji
const Discord = require('discord.js')
const config = require("../../config")
module.exports = class vc {
    constructor() {
        this.name = 'vkick'
        this.alias = ["vc", "vk"],
            this.usage = `${config.prefix}vkick`
    }
    async run(client, message, args) {
        message.delete()
        var target = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
        let vc = message.guild.channels.find(channel => channel.name === "Vck")
        if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(`${emote.airhornNo}Vous n'avez pas la permissions de faire ceci. `)
        if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send("Je n'ai pas la permission de vocal kick `MOVE_MEMBERS`", `${emote.airhornNo}`)
        if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.channel.send("Je n'ai pas la permission de vocal kick `MANAGE_CHANNELS`", `${emote.airhornNo}`)
        if (!target) return message.channel.send("Merci d'indiquer un utilisateur. :confounded: ")
        if (!target.voiceChannel) return message.channel.send(`${emote.airhornNo}Je ne peux pas kick ${target} puisqu'il n'est pas connecté dans un salon vocal. `)
        if (target.id === message.author.id) return message.channel.send(` ${emote.airhornNo}Vous ne pouvez pas vous vocal kick.`)
      


        message.guild.member(target).setVoiceChannel(null)
        message.channel.send(`${emote.airhornYes} ${target} à été du expulsé du salon vocal `)
        if (message.mentions.members.first()) 
            var embed = new Discord.RichEmbed()
            .setDescription(`Vous avez été VocalKick du serveur **${message.guild.name}** par **${message.author.tag}**`)
            .setColor('RED')
            target.send(embed)
    }
}