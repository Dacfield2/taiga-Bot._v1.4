const config = require("../../config")
const Discord = require("discord.js")
const emote = require(`../../emote`).emoji
module.exports = class run {
    constructor() {
        this.name = 'run',
            this.alias = ['run']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        let image = ["https://media0.giphy.com/media/JRlqKEzTDKci5JPcaL/giphy.gif", "https://thumbs.gfycat.com/SlipperyUnacceptableLcont-size_restricted.gif", "https://thumbs.gfycat.com/YellowWarlikeGrayling-size_restricted.gif", "https://i.gifer.com/AEOb.gif", "https://i.imgur.com/ML01adp.gif", "https://i.pinimg.com/originals/b2/3e/c2/b23ec2da7d65e41440ad206ebf934a4a.gif", "https://i.gifer.com/Awe4.gif", "https://media.giphy.com/media/rZciqpWIzAYes/giphy.gif", "https://media.giphy.com/media/qYHlTos5CDu0/giphy.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/081/817/909.gif", "https://data.whicdn.com/images/257221146/original.gif", "https://i.gifer.com/DEGl.gif", "https://animewithsky.files.wordpress.com/2016/01/omake-gif-anime-dagashi-kashi-episode-4-hotaru-kokonotsu-run.gif?w=400", "https://i.pinimg.com/originals/20/61/ff/2061ffc98ff835458bf44a7d3d605ec3.gif", "https://cdn.myanimelist.net/s/common/uploaded_files/1460140096-e75b38844a685a142f6a85da93ad9f2d.gif"]
        const embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription('**' + message.author.username + '** *coure loin... loin...*:dash:')
        .setImage(image[Math.floor(Math.random() * image.length)])
        .setFooter("Run")
        .setTimestamp()
        message.channel.send(embed)
    } 
}

