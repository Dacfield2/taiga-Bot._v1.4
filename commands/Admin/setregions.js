const emote = require('../../emote').emoji
const Discord = require('discord.js');

module.exports = class setr {
    constructor() {
        this.name = 'setr',
            this.alias = ['setr', 'setregions']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(client, message, args) {
        message.delete()
        var args = args.slice(1).join(" ")
        let region = {
            "brazil": ":flag_br: Brazil",
            "europe": ":flag_eu: Europe",
            "singapore": ":flag_sg: Singapore",
            "us-central": ":flag_us: U.S. Central",
            "japan": ":flag_jp: Japan",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. East",
            "us-south": ":flag_us: U.S. South",
            "us-west": ":flag_us: U.S. West",
            "eu-west": ":flag_eu: Western Europe",
            "london": ":flag_gb: London",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russia",
            "southafrica": ":flag_za:  South Africa"
        }

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            var error = new Discord.RichEmbed()
                .setDescription("❌ | Vous ne disposez pas des permissions nécessaires pour changer la région du serveur.")
                .setColor("#DD2E44")
            message.channel.send(error)
        }

        if (!args[0]) {
        if (message.member.hasPermission("ADMINISTRATOR"))
            var error_region = new Discord.RichEmbed()
                .setAuthor(`Entrer une des régions si dessous.`, client.user.displayAvatarURL)
                .setDescription(`**Région actuelle : ${region[message.guild.region]}**`+'```t.setr [region name]```')
                .addField(':flag_br:', 'brazil', true)
                .addField(':flag_ru:', 'russia', true)
                .addField(':flag_au:', 'sydney', true)
                .addField(':flag_ae:', 'dubai', true) 
                .addField(':flag_us:', 'us-east', true)
                .addField(':flag_us:', 'us-west', true)
                .addField(':flag_gb:', 'london', true)
                .addField(':flag_jp:', 'japan', true)
                .addField(':flag_sg:', 'singapore', true) 
                .addField(':flag_kr:', 'south-korea', true) 
                .addField(':flag_in:', 'india', true)
                .addField(':flag_za:', 'southafrica', true)
                .addField(':flag_eu:', 'europe', true) 
                .addField(':flag_us:', 'us-south', true)
                .addField(':flag_hk:', 'hongkong', true)
                .addField(':flag_us:', 'us-central', true)
        message.channel.send(error_region)
        }

        if (args[0]) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            var server = message.guild;
            var region_change = new Discord.RichEmbed()
            .setDescription(`✅ | La région du serveur est désormais ${args}`)
            .setColor("#77B255")
        message.author.send(region_change)
            server.setRegion(`${args}`)
        }}
    }
}