const config = require("../../config")
const Discord = require("discord.js")
module.exports = class punch {
    constructor() {
        this.name = 'punch',
            this.alias = ['punch']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (!message.mentions.users.first()) return message.channel.send("Vous ne pouvez pas frapper l'air...");
        let image = ["https://i.pinimg.com/originals/41/53/59/4153592097c822b7aa32924d673030f4.gif", "https://i.pinimg.com/originals/7d/d9/56/7dd956dda6a6085dbc602414c20ee03b.gif", "https://media1.tenor.com/images/eba5c89ef97de7a084acc638f1e7b3c9/tenor.gif?itemid=14844090", "https://lh3.googleusercontent.com/proxy/w1otpHM9UhfTV4f2FNzH1igKmLOBkZNeUvnq3CHEYDboebYprm_yD7ePIbJKTFisulG_YXLJgtGesMw2dSXPZR1AOKZjoTGIqlS3vgLqwbM", "https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif", "https://thumbs.gfycat.com/AdoredPersonalDegus-size_restricted.gif", "https://i.kym-cdn.com/photos/images/original/000/632/544/da9.gif", "https://vignette.wikia.nocookie.net/onepunchman/images/8/89/Ttm_vs._garou.gif/revision/latest?cb=20190910182456", "https://i.gifer.com/C3SI.gif", "https://i.pinimg.com/originals/97/6c/1e/976c1e11a5d1af939aeaf882b85efda1.gif", "https://media1.tenor.com/images/a9a1779a03aeab58d4da875f4fb61c22/tenor.gif?itemid=10950720", "https://thumbs.gfycat.com/ShadowyHomelyGiantschnauzer-max-1mb.gif", "https://i.pinimg.com/originals/16/e9/84/16e98494683509832b5ae5d4d85e3aa6.gif", "https://i.kym-cdn.com/photos/images/newsfeed/000/856/517/938.gif", "https://i.pinimg.com/originals/9e/30/f3/9e30f3ec1e7b1e1fca8b6fc428709efb.gif", 'https://i.pinimg.com/originals/f6/98/03/f6980337b5dc6e439378706784f55ed8.gif', "https://media1.tenor.com/images/7fee0978720211449c9cb6d252103278/tenor.gif?itemid=13475255", "https://media1.tenor.com/images/7a582f32ef2ed527c0f113f81a696ae3/tenor.gif?itemid=4751331", "https://pa1.narvii.com/6601/221df22aea49a6f7ca710965e2e3c833c4bf3394_hq.gif", "https://thumbs.gfycat.com/CavernousShallowDrake-size_restricted.gif", "https://thumbs.gfycat.com/LinedSociableClumber-size_restricted.gif", "https://media1.tenor.com/images/791988ce3522cafa00f035d2bb074066/tenor.gif?itemid=14960735"]
        const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription('**' + message.author.username + '** *frappe* **' + message.mentions.users.first().username + '**\n')
        .setImage(image[Math.floor(Math.random() * image.length)])
        .setFooter("Punch")
        .setTimestamp()
        message.channel.send(embed)
    }
}