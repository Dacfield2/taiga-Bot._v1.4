const config = require("../../config")
const Discord = require("discord.js")
const emote = require("../../emote").emoji
module.exports = class purge {
    constructor() {
        this.name = 'purge'
        this.alias = ['delete', 'purge', "p", 'clear'],
            this.usage = `${config.prefix}purge`
    }
    async run(client, message, args) {
        message.delete()
        const user = message.mentions.users.first() || message.guild.members.get(args[1]);
        // Parse Amount
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`${emote.airhornDND} je n'ai pas la perm de purge les messages  \`MANAGE_MESSAGES\``).catch(console.error);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${emote.airhornDND} \`Désolé, vous n'avez pas la permission de faire ceci.\``).catch(console.error);
        if (!amount) return message.channel.send(':warning: `merci d\'indiquer un nombre`').catch(console.error);
        // Fetch 100 messages (will be filtered and lowered up to max amount requested)
        var cleanEmbed = new Discord.RichEmbed()
            .setAuthor('Purge')
            .setDescription(`${emote.airhornTrashcan} **${args[2]}** messages de ${user} ont été purgé ${emote.airhornYes}`)
            .setFooter('Demandé par ' + message.author.tag, message.author.avatarURL)
            .setColor('RANDOM')
            .setTimestamp();
        message.channel.fetchMessages({
            limit: 100, 
        }).then((messages) => {

            //d!clear @mention / ID 100
            if (user) {
                const filterBy = user ? user.id : Client.user.id;
                messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
            }
            //d!clear 100
            if (!user) {
                var cleanembed = new Discord.RichEmbed()
                    .setAuthor('Purge')
                    .setDescription(`${emote.airhornTrashcan} **${args[1]}** messages ont été purgé ${emote.airhornYes}`)
                    .setFooter('Demandé par ' + message.author.tag, message.author.avatarURL)
                    .setColor('RANDOM')
                    .setTimestamp();
                message.channel.startTyping();
                message.channel.bulkDelete(args[1]).then(message.channel.send(cleanembed).then(msg => msg.delete(2000))).catch(error => message.channel.send(`\`${error}\``))
                message.channel.stopTyping(true);

                return;
            }

            message.channel.startTyping();
            message.channel.bulkDelete(messages).then(message.channel.send(cleanEmbed).then(msg => msg.delete(20000))).catch(error => message.channel.send(`\`${error}\``))
            message.channel.stopTyping(true);

        });
    }
}