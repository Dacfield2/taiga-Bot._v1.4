const config = require("../../config")
const emote = require(`../../emote`).emoji
module.exports = class tfq {
    constructor() {
        this.name = 'tu fais quoi?',
            this.alias = ['tfq']
    }
    async run(client, message, args) {
        message.delete()
        let answers = [`Je mange`, `Je joue à des jeu vidéos ${emote.airhornOnline}`, `Je me touche alors laisse moi ! ${emote.airhornEvil}`, `J'écoute de la musique ${emote.airhornMusic}`]
        message.channel.send(answers[Math.floor(Math.random() * answers.length)])
        console.log('répond a tfq')
    }
}