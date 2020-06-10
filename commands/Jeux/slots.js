const Discord = require('discord.js')
const talkedRecently = new Set();
module.exports = class slots {
    constructor() {
        this.name = 'slots',
            this.alias = ['slots']
        this.usage = '.slots'
    }
    async run(bot, message, args) {
        message.delete()
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Cool down de 5 sec. - " + message.author);
    } else {

        let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
        let result1 = Math.floor((Math.random() * slots.length));
        let result2 = Math.floor((Math.random() * slots.length));
        let result3 = Math.floor((Math.random() * slots.length));
        let name = message.author.displayName;
        let aicon = message.author.displayAvatarURL;

        if (slots[result1] === slots[result2] && slots[result3]) {
            let wEmbed = new Discord.RichEmbed()
                .setFooter("Tu as gagné!", aicon)
                .setTitle(':slot_machine:Slots:slot_machine:')
                .addField('Resultat:', slots[result1] + slots[result2] + slots[result3], true)
                .setColor("#f4e842");
            message.channel.send(wEmbed);
        } else {
            let embed = new Discord.RichEmbed()
                .setFooter('Tu as perdu!', aicon)
                .setTitle(':slot_machine:Slots:slot_machine:')
                .addField('Resultat', slots[result1] + slots[result2] + slots[result3], true)
                .setColor("#f4e842");
            message.channel.send(embed);
        }

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
        
    }
}