const Discord = require("discord.js")
const config = require("../../config")
module.exports = class ping {
    constructor() {
        this.name = 'ping',
            this.alias = ['ping']
            this.usage = `${config.prefix}ping`
    }

    async run(bot, message, args) {
        message.delete()
        let start = Date.now(); message.channel.send( ':ping_pong: Pinging.... ').then(message => { 
            let diff = (Date.now() - start); 
            let API = (bot.ping).toFixed(0)
                
                let embed = new Discord.RichEmbed()
                .setDescription(`:ping_pong: Pong!, :signal_strength: Latence: **${diff}ms** | :desktop: API: **${API}ms**.`)
                .setColor(0xff2f2f)
                message.edit(embed);
              
            });
        }
    }