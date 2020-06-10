const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const config = require('../../config')


module.exports = class animesearch  {
    constructor() {
        this.name = 'animesreach',
            this.alias = ['animesreach', 'as'],
            this.usage = `animesreach`
    }
/**
 * 
 * @param {Discord.Client} bot 
 * @param {Discord.Message} message 
 * @param {*} args 
 */
    async run(client, message, args) {
        message.delete()
        var args = args.slice(1).join(" ")
const search = `${args}`;
if(!search)
return message.reply('Please add a search query if invalid command will not work.');

malScraper.getInfoFromName(search)
  .then((data) => {
  const malEmbed = new Discord.RichEmbed()
    .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
    .setThumbnail(data.picture)
    .setColor('BLUE')
    .addField('English Title', data.englishTitle, true)
    .addField('Japanese Title', data.japaneseTitle, true)
    .addField('Type', data.type, true)
    .addField('Episodes', data.episodes, true)
    .addField('Rating', data.rating, true)
    .addField('Aired', data.aired, true)
    .addField('Score', data.score, true)
    .addField('Score Stats', data.scoreStats, true)
    .addField('Link', data.url);

    message.channel.send(malEmbed);

  })
}
};