const Discord = require("discord.js")
const moment = require("moment")
const config = require("../../config")
const emote = require("../../emote").emoji
module.exports = class userinfo {
    constructor() {
        this.name = 'userinfo',
            this.alias = ['uinfo', "ui", 'info'],
            this.usage = `${config.prefix}userinfo`
    }
      /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete()
        const status = {
            online: `En ligne ${emote.airhornOnline}`,
            idle: `Absent ${emote.airhornIdle}`,
            dnd: `Ne Pas Déranger ${emote.airhornDND}`,
            offline: `Hors ligne/invisible ${emote.airhornOffline}`,
            streaming: `En stream ${emote.airhornStreaming}`
        };
     
        var permissions = [];
        var acknowledgements = 'Non';
        const mentioneduser = message.mentions.members.first() || message.guild.members.get(args[1]) || message.member;
        const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
        var gamepresence = mentioneduser.presence.game
        var nickname = mentioneduser.nickname
        if (mentioneduser.hasPermission("ADMINISTRATOR")) {
            permissions.push("Administrateur");
        }
        const presence = {
            Listening : `Écoute **${gamepresence}**${emote.airhornMusic}`,
            Playing : `Joue à **${gamepresence}**:video_game: `,
            Watching : `Regarde **${gamepresence}**${emote.airhornWatching}`,
            Streaming : `**${gamepresence}** en stream ${emote.airhornStreaming}`,
        }
       
        if (mentioneduser.hasPermission("BAN_MEMBERS")) {
            permissions.push("Bannir des membres");
        }

        if (mentioneduser.hasPermission("KICK_MEMBERS")) {
            permissions.push("Expulser des membres");
        }

        if (mentioneduser.hasPermission("MANAGE_MESSAGES")) {
            permissions.push("Gérer les messages");
        }

        if (mentioneduser.hasPermission("MANAGE_CHANNELS")) {
            permissions.push("Gérer les salons");
        }

        if (mentioneduser.hasPermission("MENTION_EVERYONE")) {
            permissions.push("Mentionner Everyone");
        }

        if (mentioneduser.hasPermission("MANAGE_NICKNAMES")) {
            permissions.push("Gérer les pseudos");
        }

        if (mentioneduser.hasPermission("MANAGE_ROLES")) {
            permissions.push("Gérer les rôles");
        }

        if (mentioneduser.hasPermission("MANAGE_WEBHOOKS")) {
            permissions.push("Gérer les Webhooks");
        }

        if (mentioneduser.hasPermission("MANAGE_EMOJIS")) {
            permissions.push("Gérer les Emojis");
        }


        if (permissions.length == 0) {
            permissions.push("Aucune permission sur cet utilisateur");
        }

        if (mentioneduser.id == message.guild.owner.id) {
            acknowledgements = 'Oui';
        }
        if (!mentioneduser.presence.game){
            gamepresence = `Aucun jeux ${emote.airhornNo}`
        }

        if (!mentioneduser.nickname){
            nickname = `Aucun surnom ${emote.airhornNo}`
        }
        if (gamepresence.type === 0){
            gamepresence = presence.Playing
        }
        if (gamepresence.type === 1){
            gamepresence = presence.Streaming
        }
        if (gamepresence.type === 2){
            gamepresence = presence.Listening
        } 
        if (gamepresence.type === 3) {
            gamepresence = presence.Watching
        }
        let messag;
        if (mentioneduser.lastMessage) {
            messag = `[${mentioneduser.lastMessage.content}](${mentioneduser.lastMessage.url})`;

        } else {
            messag = `Il n'a pas envoyé de message ${emote.airhornNo}`;

        }
        const embed = new Discord.RichEmbed()
            .setDescription(`<@${mentioneduser.id}> | ID: ${mentioneduser.id}`)
            .setAuthor(`${mentioneduser.user.tag}`, mentioneduser.user.displayAvatarURL)
            .setColor("RANDOM")
            .setThumbnail(mentioneduser.user.displayAvatarURL)
            .addField(`Status`, `${status[mentioneduser.presence.status]}`, true)
            .addField("Pseudo", `${mentioneduser.user.username}#${mentioneduser.user.discriminator}`, true)
            .addField("Dernier message:", `${messag} `, true)
            .addField("Surnom", nickname, true)
            .addField("Jeux:", gamepresence, true)
            .addField('Rejoins le: ', `${moment(mentioneduser.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("Compte créé le: ", `${moment(mentioneduser.user.createdAt).format("dddd, MMMM  YYYY, HH:mm:ss")}`, true)
            .addField("Permissions: ", `${permissions.join(', ')}`, true)
            .addField(`Roles [${mentioneduser.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`, `${mentioneduser.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" **|** ") || "Pas de rôle sur cet utilisateur"}`, true)
            .addField("Serveur Owner :crown: : ", `${acknowledgements}`, true)
            .setTimestamp();

        message.channel.send({ embed });
    }
}