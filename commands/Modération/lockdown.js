const config = require("../../config")
const Discord = require("discord.js")
const fs = require("fs")
const ms = require("ms")
const emote = require("../../emote").emoji
module.exports = class lockdown {
    constructor() {
        this.name = 'lockdown'
        this.alias = ['lock'],
            this.usage = `${config.prefix}lockdown`
    }
    async run(client, message, args) {
        message.delete()
        if (!client.lockit) client.lockit = [];
        const time = args.slice(1).join(` `)
        const validUnlocks = 'unlock'
        if (!time) return message.reply(`Merci d'entrer une durée pour bloqué le salon`);
      
        if (validUnlocks.includes(time)) {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(() => {
            message.channel.send('Salon débloqué');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
          }).catch(error => {
            console.log(error);
          });
        } else {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
          }).then(() => {
            message.channel.send(`${emote.airhornLock} Salon bloqué pendant ${time}`).then(() => {
      
              client.lockit[message.channel.id] = setTimeout(() => {
                message.channel.overwritePermissions(message.guild.id, {
                  SEND_MESSAGES: null
                }).then(message.channel.send('Salon débloqué')).catch(console.error);
                delete client.lockit[message.channel.id];
              }, ms(time));
      
            }).catch(error => {
              console.log(error);
            });
          });
        }
      };
    }
