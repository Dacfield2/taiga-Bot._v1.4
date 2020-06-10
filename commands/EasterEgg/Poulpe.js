const Discord = require(`discord.js`)
const config = require(`../../config`)
const emote = require('../../emote').emoji
module.exports = class poulpe {
    constructor() {
        this.name = 'poulpe'
        this.alias = [`poulpe`],
            this.usage = `${config.prefix}poulpe`
    }
    async run(client, message, args) {
        message.delete()
        const emoji1 = '583316071042514944'
        const emoji = '583316517169659916'
    const embed = new Discord.RichEmbed()
    .setDescription("**J'aime les poulpes et toi ?**:squid:")
    .setColor('RANDOM')
    .setImage("https://www.tvhland.com/community/img/image/201311/527a8b05657eb.jpg")
    .setFooter("Faite pour quelqu'un.")
    message.channel.send(embed).then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const yes = (reaction, user) => reaction.emoji.name === "airhornYes" && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === "airhornNo" && user.id === message.author.id;
            const sure = msg.createReactionCollector(yes, {
                time: 1000000
            });
            const no = msg.createReactionCollector(nopleas, {
                time: 1000000
            });

            sure.on('collect', r => {
                message.channel.send(`C'est bien on va bien s'entendre tout les deux alors^^ :squid:`)
            })
            no.on('collect', r => {
                message.channel.send(`Va bruler des les flames de l'enfer. :fire: `)
            })
        })
    })
}
}