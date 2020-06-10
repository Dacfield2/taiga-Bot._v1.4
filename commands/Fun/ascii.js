var figlet = require('figlet');

module.exports = class ascii {
    constructor() {
        this.name = 'ascii',
            this.alias = ['ascii']
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args
     */

    async run(bot, message, args) {
        message.delete()
        var args = args.slice(1).join(" ")
//command
var maxLen = 100 
  
  if(args.length > maxLen) return message.channel.send(`The max length is ${maxLen}!`) 
  
  if(!args[0]) return message.channel.send('Please enter some text.');
  
  figlet(`${args}`, function(err, data) {
      if (err) {
          console.log('k...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}
};