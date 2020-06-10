const config = require("../../config")
const Discord = require("discord.js")
module.exports = class blush {
    constructor() {
        this.name = 'blush',
            this.alias = ['blush']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        var args = args.slice(1).join(" ").split(',')
        let image = ["https://thumbs.gfycat.com/AcidicSecondhandBanteng-small.gif", "https://i.pinimg.com/originals/9e/9a/09/9e9a09a15e8bebcdb90352de3e037a87.gif", "https://media0.giphy.com/media/1gbQIeNzZxcSk/source.gif", "https://media.tenor.com/images/17b23e4955bc758ba061168d3a4c1780/tenor.gif", "https://i.pinimg.com/originals/b7/4a/5b/b74a5b128b5d65ea1fdb9090c0b3f295.gif", "https://66.media.tumblr.com/6a3e50286b6f45fd74c515b66f81e471/tumblr_ni8yoi6qLO1u55xnmo4_500.gifv", "https://i.gifer.com/Bybm.gif", "https://thumbs.gfycat.com/AmusingNaturalDragonfly-small.gif", "https://i.imgur.com/dfDXRaV.gif", "https://66.media.tumblr.com/57f08ef9b3f91cc15f368c923bdc14bf/tumblr_nwjov49t9i1smmps3o2_r1_500.gif", "https://i.kym-cdn.com/photos/images/newsfeed/000/750/716/a31.gif", "https://i.gifer.com/QHqZ.gif", "https://media1.tenor.com/images/ac2f1f727d4d96a6a7c4fb5ae5a41cf0/tenor.gif?itemid=12297830", "https://33.media.tumblr.com/578f4a1f9eecc7c944b7b2721880fdbb/tumblr_n02m902fgm1r4kkpvo1_500.gif", "https://media0.giphy.com/media/3JpQCZwHwCdu4bOiJu/source.gif", "https://33.media.tumblr.com/8146a968e36c1e03d920d0c9bbc704c8/tumblr_nd206ynRcg1tk91v5o4_500.gif", "https://giffiles.alphacoders.com/486/48616.gif", "https://38.media.tumblr.com/b7d9b76fefca3801cbff70f930b41dea/tumblr_n8cris5uP91txotz6o2_500.gif", "https://pa1.narvii.com/5707/fed95979fc1e082af94ef5eeee546098b3484a4b_hq.gif"]
        const embed = new Discord.RichEmbed()
        .setColor("#c00c56")
        .setDescription('**' + message.author.username + '** *rougis à cause de* **' + args + '** :blush:\n')
        .setImage(image[Math.floor(Math.random() * image.length)])
        .setFooter("Blush")
        .setTimestamp()
        message.channel.send(embed)
    }
}