const Discord = require("discord.js")
const config = require("../../config")
module.exports = class flip {
    constructor() {
        this.name = 'flip',
            this.alias = ['flip']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
message.delete()

        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Start with the character '!'
        const OFFSET = '!'.charCodeAt(0);

        if (args.length < 2) return message.channel.send("Merci d'indiquer un text à retourner.");

        message.channel.send(
            args.slice(1).join(' ').split('')
                .map(c => c.charCodeAt(0) - OFFSET)
                .map(c => mapping[c] || ' ')
                .reverse().join('')
        );
    }
}