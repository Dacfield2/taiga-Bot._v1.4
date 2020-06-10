const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config')
const emote = require('./emote').emoji
const fs = require('fs')
const { CommandHandler } = require('horn-cmdhandler');

let cooldown = new Set();
let cdseconds = 5;
const CH = new CommandHandler({
  folder: __dirname + '/commands/',
  prefix: [config.prefix]
});

fs.readdir('./events/', (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0)
      return console.log('There are no events to load...');
    console.log(`==================|Loading ${jsfiles.length} events...|==================`);
    jsfiles.forEach((f, i) => {
      require(`./events/${f}`);
      console.log(`${i + 1}: ${f} loaded!`);
    });
  });

  module.exports = {
    client: client 
};

client.on(`message`, function (message) {
    let args = message.content.split(' ');
    let command = args[0];
    let cmd = CH.getCommand(command);
    if (!cmd) return;
    if (message.author.id === client.user.id) return;
  
  
  
    try {
      if (cooldown.has(message.author.id)) {
        message.delete();
        return message.channel.send(`${emote.airhornNo} Vous devez patienter 5 secondes entre les commandes`)
      }
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        cooldown.add(message.author.id)
  
      }
      cmd.run(client, message, args)
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 1000)
    if (!message.guild) return

})

settings = {
  prefix: "t.",
};

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 10000,
  default: {
      botsCanWin: false,
      exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
      embedColor: "#FF0000",
      reaction: "🎉"
  }
});
client.giveawaysManager = manager;

client.on("ready", () => {
  console.log("<|Giveaway ready!|>");
});

client.on("message", (message) => {
 
  const ms = require("ms"); 
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "gstart"){

      client.giveawaysManager.start(message.channel, {
          time: ms(args[0]),
          prize: args.slice(2).join(" "),
          winnerCount: parseInt(args[1])
      }).then((gData) => {
          console.log(gData);
      });
  }
  if(command === "greroll"){
    let messageID = args[0];
    client.giveawaysManager.reroll(messageID).then(() => {
        message.channel.send("Success! Giveaway rerolled!");
    }).catch((err) => {
        message.channel.send("No giveaway found for "+messageID+", please check and try again");
    });
  }
  if(command === "gdel"){
    let messageID = args[0];
    client.giveawaysManager.delete(messageID).then(() => {
        message.channel.send("Success! Giveaway deleted!");
    }).catch((err) => {
        message.channel.send("No giveaway found for "+messageID+", please check and try again");
    });
}
});

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ + /g)
    client.channels.get("718805859483910216").send(x.join(" "))
})

client.login(config.token)