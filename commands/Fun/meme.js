const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = class meme {
    constructor() {
        this.name = 'meme',
            this.alias = ['meme']
    }

    async run(client, message, args) {
        message.delete()
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}