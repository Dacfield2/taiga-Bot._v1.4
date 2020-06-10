const emote = require(`../../emote`).emoji
const config = require("../../config")
const Discord = require("discord.js")
module.exports = class nickname {
    constructor() {
        this.name = 'nickname',
            this.alias = ['setn', 'setnickname', 'setnick', "set", "name"],
            this.usage = `.setnick`
    }

    async run(client, message, args) {
        message.delete()
        if (!message.member.hasPermission(`MANAGE_NICKNAMES`)) return message.channel.send(`${emote.airhornNo} vous n'avez pas la permission de faire ceci.`)
        var user = message.mentions.members.first() || message.guild.members.get(args[1]);
        var reason = args.slice(2).join(" ")
        if (!user) return message.reply(`${emote.airhornNo}Veuillez mentionner un utilisateur`)
        if(!reason) return message.channel.send(`${emote.airhornNo}Veuillez indiquez un nom`)
        await  user.setNickname(reason).then(

        message.channel.send(`${emote.airhornYes} ${user} à été rename en **${reason}**`)).catch(err => message.channel.send(err))

    }
}
