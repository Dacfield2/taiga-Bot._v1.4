const Discord = require('discord.js');
const {client} = require('../bot');

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
};

client.on("guildCreate", (guild) => {
    console.log(`${client.user.username} a rejoint un serveur nommé ${guild.name} : l'owner est ${guild.owner.user.tag} la guild compte ${guild.memberCount} membres`)
    let embed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setTitle("Nouveau Serveur")
        .setDescription(`${client.user.username} a rejoins un serveur nommé **${guild.name}** l'owner est ${guild.owner.user.tag}`)
        .addField(`ID du serveur `, `${guild.id}`, true)
        .addField("Région", region[guild.region], true)
        .addField('Niveau de vérification', guild.verificationLevel, true)
        .addField('Nombre de channel', guild.channels.size)
        .addField(`le serveur compte :`, guild.memberCount + " membres")
        .addField(`le bot compte :`, `${client.guilds.size} serveurs`)
        .setFooter(`${client.user.username}`)
        .setTimestamp()
    client.channels.get("705108768832094248").send(embed)

})

client.on("guildDelete", (guild) => {
    console.log(`${client.user.username} a quitté un serveur nommé ${guild.name} : l'owner était ${guild.owner.user.tag} la guild comptait ${guild.memberCount} membres`)
    let embed = new Discord.RichEmbed()
        .setColor("#922b21")
        .setTitle("Départ d'un Serveur")
        .setDescription(`${client.user.username} a quitté un serveur nommé **${guild.name}** l'owner était ${guild.owner.user.tag}`)
        .addField(`ID du serveur `, `${guild.id}`, true)
        .addField("Région", region[guild.region], true)
        .addField('Niveau de vérification', guild.verificationLevel, true)
        .addField(`le serveur comptait :`, guild.memberCount + " membres")
        .addField(`le bot compte :`, `${client.guilds.size} serveurs`)
        .setFooter(`${client.user.username}`)
        .setTimestamp()
    client.channels.get("705108768832094248").send(embed) 
})