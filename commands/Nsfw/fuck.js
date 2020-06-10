const config = require("../../config")
const superagent = require("snekfetch");
const Discord = require("discord.js")
module.exports = class fuck {
    constructor() {
        this.name = 'fuck',
            this.alias = ['fuck']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (!message.mentions.users.first()) return message.channel.send("Vous ne pouvez pas fuck l'air...");
        if (message.channel.nsfw === true) {
        let image = ["https://thumb-p2.xhcdn.com/a/3LPedCnXLt56T1gEZ_mv2A/000/110/305/582_450.gif", "https://img-hw.xvideos.com/videos/profiles/galleries/ae/4f/05/itisallaboutit/gal2043561/pic_3_big.gif", "https://45.media.tumblr.com/cbeabd4a5f03fd66bbf574163377c62f/tumblr_nwd92diSQV1tbcoh8o1_500.gif", "https://pornogifs.net/wp-content/uploads/2020/01/59202104.gif", "https://lh3.googleusercontent.com/proxy/dKJLkp8UreRknNF-L00x6iuv9JO5DWiRaxXtoZpkSOT2MwDotVF6ZTgc9Lm0aqFGhEW_9ih5k0SyIdSB1sVj9VH8lYdYgiprYDFtvfPlB8lQC3I", "https://49.media.tumblr.com/c2aa476a35b16926b8976c540d54d65a/tumblr_ncv52q4gIT1s7bkc7o2_r1_400.gif"]
        const embed = new Discord.RichEmbed()
        .setColor(6192321)
        .setDescription('**' + message.author.username + '** *baise* **' + message.mentions.users.first().username + '** :underage:\n')
        .setImage(image[Math.floor(Math.random() * image.length)])
        .setFooter(`${message.author.tag} | fuck`, message.author.avatarURL)
        message.channel.send(embed)

    } else {
        message.channel.send("This isn't NSFW channel!")
    }
    }
}

    