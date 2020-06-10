const Discord = require("discord.js")
const emote = require("../../emote").emoji
const moment = require("moment")
module.exports = class spotify {
    constructor() {
        this.name = 'spotify',
            this.alias = ['spot', "s"],
            this.usage = '.spotify'
    }
    /**
     * 
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        message.delete()
        var user = message.mentions.users.first() || message.author
        if (user.presence.game.type === 2) {
            try {
                var trackImg = user.presence.game.assets.largeImageURL;
                var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
                var trackName = user.presence.game.details;
                var trackAlbum = user.presence.game.assets.largeText;
                var trackAuthor = user.presence.game.state;
                var trackStart = moment(user.presence.game.timestamps.start).format(" m [mins] , s [secs]")
                var trackEnd = moment(user.presence.game.timestamps.end).format("m [mins] , s [secs]")
                const embed = new Discord.RichEmbed()
                    .setTitle(user.username)
                    .setURL("https://www.youtube.com/channel/UCtcShc5-__fSqEcjxmL5WvA")
                    .setAuthor('Spotify musique info', "https://cdn.discordapp.com/emojis/408668371039682560.png")
                    .setColor('1db954')
                    .setThumbnail(trackImg)
                    .setDescription(`
    ${emote.airhornMusic} **Musique en cours :**  \`${trackName}\`
    \`📀\` **Album :**  \`${trackAlbum}\`
    \`🎤\` **Auteur(s) :**  \`${trackAuthor}\`
    `)
                    .addField('Lien de la musique :', `[${trackUrl}](${trackUrl})`, false);
                return message.channel.send(embed);

            } catch (error) {
                return message.channel.send(`\`[ERREUR ❌]\` ${error}`);
            }

        } else {
            return message.channel.send(`${user.username} n'est pas entrain d'écouter une musique sur Spotify`);

        }
    }
}