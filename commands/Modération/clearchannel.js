const Discord = require("discord.js")
const emote = require("../../emote").emoji
const config = require("../../config")
module.exports = class clearchannel {
    constructor() {
        this.name = 'clearchannel'
        this.alias = ['clearchan', 'cc'],
            this.usage = `${config.prefix}clearchannel`
    }
     /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    
    async run(client, message, args) {
        message.delete()
        const emoji1 = '583316071042514944'
        const emoji = '583316517169659916'
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${emote.airhornNo} Je n'ai pas la permission de `)
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${emote.airhornNo} Vous n'avez pas la permission de faire ceci.`)
        let embed = new Discord.RichEmbed()
            .setAuthor("Attention", "https://image.noelshack.com/fichiers/2020/17/6/1587770591-attention-logo-png-nyc-1-train-symbol-11562973267lspt9ohsis.png")
            .setDescription("Attention êtes vous sûre de vouloir clear entièrement le salon ?")
            .setColor("#D68910")
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
                    const poschan = message.channel.calculatedPosition
                    const parentID = message.channel.parentID
                    message.channel.clone().then(c => {
                        c.setParent(parentID)
                        c.setPosition(poschan)
                        c.send(`${message.author} le salon a été clear ${emote.airhornYes}`).then(m => m.delete(15000))
                    })
                    message.channel.delete(200)
                })
                no.on('collect', r => {
                    msg.delete();
                    message.channel.send(`${emote.airhornYes} la commande à été annulé`)
                })
            })
        })
    }
}
