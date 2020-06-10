const Discord = require('discord.js')
const moment = require("moment")
const config = require("../../config")
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
module.exports = class uptime {

    constructor() {
        this.name = 'uptime',
            this.alias = ['uptime', 'up'],
            this.usage = `${config.prefix}uptime`
    }
    async run(bot, message, args) {
        message.delete()
        let u = convertMS(bot.uptime);
        let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"




        const duration = moment.duration(bot.uptime)
        let bicon = bot.user.displayAvatarURL;
        const botembed = new Discord.RichEmbed()
            .setColor(`#1E8449`)
            .setDescription(` **Uptime :**  ${uptime} `)
            
            .setAuthor("Dacfield2'Bot", bicon)

        message.channel.send(botembed);


    }
}

