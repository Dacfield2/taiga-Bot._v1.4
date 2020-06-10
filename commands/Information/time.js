const Discord = require("discord.js")
const config = require("../../config")
module.exports = class time {
    constructor() {
        this.name = 'time'
        this.alias = ["temps", "t"],
            this.usage = `${config.prefix}time`
    }
    async run(client, message, args) {
        message.delete()
        const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
        var today = new Date()
        let Day = today.toString().split(" ")[0].concat("day");
        let Month = today.toString().split(" ")[1]
        let Year = today.toString().split(" ")[3]
        const embed = new Discord.RichEmbed()
            .setColor(randomColor)
            .addField("Nous sommes :", `\`${Day}\` ,\`${Month}\` ,\`${Year}\`\n\`Heures:\` \`${today.toString().split(" ")[4]}\``)
        message.channel.send({ embed })
    }
}