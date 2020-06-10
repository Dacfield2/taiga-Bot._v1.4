const Discord = require(`discord.js`)
const emote = require(`../../emote`).emoji
const config = require(`../../config`)
module.exports = class welcomer {
    constructor() {
        this.name = 'welcomer'
        this.alias = ["welc"],
            this.usage = `${config.prefix}welcomer`
    }
    async run(client, message, args) {
        message.delete()
        let embed = new Discord.RichEmbed()
        .setTitle(":hand_splayed: Welcomer - info :hand_splayed:")
        .setColor("#c5ab18")
        .setImage('https://image.noelshack.com/fichiers/2020/24/2/1591700806-welcomer.png')
        .setDescription("Pour activé le welcomer il suffit juste de créer un channel avec comme nom 'bienvenue' \n---------------------------------\n °Ne pas mettre d'émoji sur le nom du channel car sinon sa ne marchera pas. \n °Le welcomer n'est pas modifiable. \n °Voir message welcome ci-dessous.")
        message.author.send(embed)
        .then(message.channel.send(`Envoie des information en cours ${emote.airhornLoading}`).then(msg => setTimeout(() => {
            msg.edit(`Information envoyé avec succès ${emote.airhornYes}`).then(m => m.delete(15000))
        }, 2000))).catch(err => message.channel.send(`\`${err}\``))
    }
}