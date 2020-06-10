const config = require("../../config")
const Discord = require("discord.js")
module.exports = class cry {
    constructor() {
        this.name = 'cry',
            this.alias = ['cry']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        let image = ["https://media.giphy.com/media/gXe16TVCpXOqQ/giphy.gif", "https://i.pinimg.com/originals/73/3d/59/733d5948098702b0d6f156819143b581.gif", "https://media0.giphy.com/media/4smXTnnqlS2ys/source.gif", "https://data.photofunky.net/output/image/c/1/6/b/c16b51/photofunky.gif", "https://media1.giphy.com/media/Xqlsn2kLPBquI/source.gif", "https://gif-finder.com/wp-content/uploads/2015/07/Anime-girl-crying.gif?v=2", "https://steamuserimages-a.akamaihd.net/ugc/771722250234544354/136B99C837BDAEB6CA7E0926B2C0C347F98039BE/", "https://media.giphy.com/media/ukfn7kMzzLqLeyi5Tt/giphy.gif", "https://media1.tenor.com/images/d63f4a696974527ab3054dac0be099d4/tenor.gif?itemid=5497252", "https://i.imgur.com/z4MSTZR.gif", "https://66.media.tumblr.com/0534947fe85e807dd1df93775db8c764/tumblr_n1exhcveAz1t7rcb5o1_400.gifv", "https://i.pinimg.com/originals/3f/8c/f8/3f8cf8ac78cf067f3c767825176e59bf.gif", "https://78.media.tumblr.com/5d4be9e172a65bbc7e099cf6090f0e0e/tumblr_p1j4i9NJwn1qbvovho1_r1_500.gif"]
        const embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription('**' + message.author.username + '** *pleure seul :cry:*')
        .setImage(image[Math.floor(Math.random() * image.length)])
        .setFooter("Cry")
        .setTimestamp()
        message.channel.send(embed)
    }
}
