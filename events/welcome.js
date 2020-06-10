const Discord = require('discord.js');
const {client} = require('../bot');

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(x => x.name === `bienvenue`)
    if (!channel) return;
    channel.send(`||${member}||`)
    var WelcomeEmbed = new Discord.RichEmbed()
    .setTitle(':tada: Bienvenue :tada: ')
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(`Hey bienvenue, **${member}** sur le serveur **${member.guild.name}**. 
    \n Grâce à toi nous sommes désormais ` +'**'+ member.guild.memberCount +'**'+ ' membres :heart_decoration:')
    .setTimestamp()
    channel.send(WelcomeEmbed);
});