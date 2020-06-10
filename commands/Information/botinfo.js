const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment")
function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
module.exports = class botinfo {
    constructor() {
        this.name = 'botinfo',
            this.alias = ['binfo', "bi"],
            this.usage = `${config.prefix}botinfo`
    }
      /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete()
        const status = {
            online: "En ligne",
            idle: "Absent",
            dnd: "Ne Pas Déranger",
            offline: "Hors ligne/invisible"
        };
        let u = convertMS(bot.uptime);
        let uptime = u.d + " days " + u.h + " hours " + u.m + " minutes " 
        

        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
        
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("Taiga'Bot - info", bot.user.displayAvatarURL)
            .addField("**Créateur du bot**", `@Hiroto2507`, true)
            .addField(`**Prefix**`, `${config.prefix}`, true)
            .addField(` **Uptime**`, `${uptime}`, true)
            .addField("**User** ", `${bot.users.size.toLocaleString()}`, true)
            .addField("**Serveurs** ", `${bot.guilds.size.toLocaleString()}`, true)
            .addField("**Discord.js** ", `v11.5.1`, true)
            .addField("**Node** ", `${process.version}`, true)
            .addField("**RAM** ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, true)
            .addField("**CPU** ", `${percent.toFixed(2)}%`, true)
            .addField("**Architecture**", `${os.arch()}`, true)
            .addField("**Latence API**", `${bot.ping.toFixed(0)} ms`, true)
            .addField("**Language Dev**", "Javascript", true)
            .setFooter("Taiga'Bot")
 
        message.channel.send(embed)
    
    }
)}}
