const config = require("../../config")
const Discord = require("discord.js")
module.exports = class bang {
    constructor() {
        this.name = 'bang',
            this.alias = ['bang']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        if (!message.mentions.users.first()) return message.channel.send("Vous ne pouvez pas tirer dans le vent...");
        let image = ["https://media1.tenor.com/images/ba71fc9b0282c9c3d16a51c5b1c3dd55/tenor.gif?itemid=10035524", "https://i.imgur.com/JVutfd2.gif", "https://i.pinimg.com/originals/40/49/b5/4049b559d6f08dc8ac5c174a53d109d4.gif", "https://media1.tenor.com/images/940d040ebde3504b6cd822c6247834dd/tenor.gif?itemid=12150224", "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAmlnlbly1V9bdF--IUwVxwY", "https://i.imgur.com/EKpw8eo.gif", "https://thumbs.gfycat.com/DefiantWholeBear-size_restricted.gif", "https://i.imgur.com/nKHZmiY.gif", "https://lh3.googleusercontent.com/proxy/FHeJOlEPcGJrOjnoECSglsnrgQM6UnY7_0-J8ZSx-KD6uVfVovSh-fXeQFDiUOXsfv3XR51wDhpoeYogoD84jBFq-Kz8EqsQN6brSSisHLA", "https://i.pinimg.com/originals/57/07/6c/57076ccbecb6cba0a491806ee403c31e.gif", "https://lh3.googleusercontent.com/proxy/YpNfKYvHsKZZpMVvCI6NB21YuAlH__3xr6Os98c0em9eDd2kwvYM_nU0qu94-UMeSdOMtrstH-kvWRTl_nFgP4b9pOW2fsAp37pM2Yj5LjE"]
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription('**' + message.author.username + '** *a tirer sur* **' + message.mentions.users.first().username + '** :gun:\n')
        .setImage(image[Math.floor(Math.random() * image.length)])
        .setFooter("Bang")
        .setTimestamp()
        message.channel.send(embed)
    }
}