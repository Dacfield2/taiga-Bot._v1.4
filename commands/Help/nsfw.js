const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class nsfw {
    constructor() {
        this.name = 'nsfw'
        this.alias = [],
            this.usage = `${config.prefix}nsfw`
    }
    async run(client, message, args) {
        message.delete()
        var nsfwembed = new Discord.RichEmbed()
        .setTitle("Commandes de nsfw ")
        .setThumbnail("https://rating.pegi.info/images/games/age_threshold_icons/18.png")
        .addField("t.ass:underage: ","Envoie une image de cul.", true)
        .addField("t.pussy:underage: ","Envoie une image de vagin.", true)
        .addField("t.hentai:underage: ","Envoie une image de hentai.", true)
        .addField("t.gif:underage: ","Envoie un gif porno.", true)
        .addField("t.4k:underage: ","Envoie une image porno 4k.", true)
        .addField("t.anal:underage: ","Envoie une image d'anal.", true)
        .addField("t.erofeet:underage:", "Envoie une photo érotique de feet", true)
        .addField("t.feet:underage:", "Envoie une image/gif de feetjob.", true)
        .addField("t.cum:underage:", "Envoie une image de sperme.", true)
        .addField("t.bj:underage:", "Envoie une photo de fellation.", true)
        .addField("t.fuck @username:underage:", "Baise la personne mentionné", true)
        .addField("t.eroneko:underage:", "Envoie une image érotique de neko", true)
        .addField("t.neko:underage:", "Envoie un gif de neko version nsfw", true)
        .addField("t.yuri:underage:", "Envoie un gif de yuri", true)
        .setTimestamp()
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setColor("RED")
        .setTimestamp()
        message.author.send(nsfwembed)
        .then(message.channel.send(`Envoie des commandes en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Commandes envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}