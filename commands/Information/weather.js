const Discord = require("discord.js")
const moment = require("moment")
const config = require("../../config")
const emote = require("../../emote").emoji
module.exports = class weather {
    constructor() {
        this.name = 'weather',
            this.alias = ['weath'],
            this.usage = `${config.prefix}weather`
    }
    /**
   * @param {Discord.Client} bot 
   * @param {Discord.Message} message 
   * @param {*} args 
   */
    async run(bot, message, args) {
        const weather = require("weather-js")

        message.delete()
        weather.find({ search: args.splice(1).join(" "), degreeType: 'C' }, function (err, result) {
            if (result === undefined || result.length === 0) {
                message.channel.send(`${emote.airhornNo} merci d'entrer une ville`)
                return;
            }
            if (err) return message.channel.send(err);

            var current = result[0].current;
            var location = result[0].location;
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Météo pour la ville ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Fuzeau horaire', `UTC${location.timezone}`, true)
                .addField('Degrée', location.degreetype, true)
                .addField('Temperature', `${current.temperature} Degrées`, true)
                .addField('Ressenti', `${current.feelslike} Degrées`, true)
                .addField('Vent', current.winddisplay, true)
                .addField('Humidité', `${current.humidity}%`, true)
            message.channel.send({ embed });
        })
    }
}