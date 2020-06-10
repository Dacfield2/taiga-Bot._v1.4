const Discord = require("discord.js")
const config = require("../../config")
const emote = require(`../../emote`).emoji
module.exports = class serverinfo {
    constructor() {
        this.name = 'serverinfo',
            this.alias = ['serveurinfo', "sinfo", "si", "servinfo"],
            this.usage = `${config.prefix}serverinfo`
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete()
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
        function checkBots(guild) {
            let botCount = 0;
            guild.members.forEach(member => {
                if (member.user.bot) botCount++;
            });
            return botCount;
        }

        function checkMembers(guild) {
            let memberCount = 0;
            guild.members.forEach(member => {
                if (!member.user.bot) memberCount++;
            });
            return memberCount;
        }

        function checkOnlineUsers(guild) {
            let onlineCount = 0;
            guild.members.forEach(member => {
                if (member.user.presence.status === "online")
                    onlineCount++;
            });
            return onlineCount;
        }

        function checkOfflineUsers(guild) {
            let offlineCount = 0;
            guild.members.forEach(member => {
                if (member.user.presence.status === "offline")
                    offlineCount++;
            });
            return offlineCount;
        }

        function checkDndUser(guild) {
            let dndCount = 0;
            guild.members.forEach(member => {
                if (member.user.presence.status === "dnd")
                    dndCount++;
            });
            return dndCount;
        }

        const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
        let sicon = message.guild.iconURL
        let serverembed = new Discord.RichEmbed()
            .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL)
            .setColor(randomColor)
            .addField('Chef du serveur :crown: ', message.guild.owner, true)
            .addField(`ID du serveur :id: `, `${message.guild.id}`, true)
            .setThumbnail(sicon)
            .addField("Nom du serveur", message.guild.name)
            .addField("Région", region[message.guild.region], true)
            .addField('N° de vérification', message.guild.verificationLevel, true)
            .addField("émojis", `${message.guild.emojis.size} émojis`, true)
            .addField("Nombre de rôles", `${message.guild.roles.size} rôles`, true)
            .addField('Nombre de channel', message.guild.channels.size, true)
            .addField('Member total', message.guild.memberCount)
            .addField('Humans :boy: ', checkMembers(message.guild), true)
            .addField('Bots :robot: ', checkBots(message.guild), true)
            .addField('Member status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** En ligne ${emote.airhornOnline} \n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Absent ${emote.airhornIdle}\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne Pas Déranger ${emote.airhornDND}\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Hors-Ligne/Invisible ${emote.airhornOffline}`)
            .setFooter('Guild created at:')
            .setTimestamp(message.guild.createdAt);

        message.channel.send(serverembed)

    }
}
