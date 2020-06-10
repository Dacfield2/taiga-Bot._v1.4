const {client} = require('../bot');
const config = require('../config');

const activities_list = [
    `${config.prefix}help | for help`, 
    `23 serveurs`,
    `v${config.version}`, 
    `${config.prefix}help | for help`,
]

client.on(`ready`, () => {
    console.log(`-->Salut ${client.user.username} est en ligne!<--`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index], { type: "STREAMING", url: "https://twitch.tv/blou112" }); 
    }, 10000); 
})