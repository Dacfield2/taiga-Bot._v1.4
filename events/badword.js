const discord = require('discord.js');
const {client} = require('../bot');

client.on ("message", async message => {
    let badword = ["ftg","connard","pute","putain","tg","nique","con","conne","salope","pd","fdp","cons","con","nike ta mère","ta daronne","daronne","daronnes","ta daronnes","darones","darone","put","ta darone","fils de pute","fils de put","salop","ta geule","ta gueule","violé","viole","encule","enculer","bite","nique ta mere"];
     if (badword.some(x => message.content.toLowerCase().split ().includes(x))) {
       message.reply("Message supprimé !\n :warning: Langage Grossier !").then(m => m.delete(15000))
       message.delete(message.author)
    }
})