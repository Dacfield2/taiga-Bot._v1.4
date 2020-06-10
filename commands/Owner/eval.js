const config = require("../../config")
const Discord = require("discord.js")
const inspect = require("util")
module.exports = class evaluated {
    constructor() {
        this.name = 'eval',
            this.alias = ['eval'],
            this.usage = `${config.prefix}eval`
    }
    /**
     * @param {Discord.Client} bot 
     * @param {Discord.Message} message 
     * @param {*} args 
     */
    async run(bot, message, args) {
        if (!config.ownerID.includes(message.author.id)) return
     message.delete()
        function clean(text) {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        } try {
            const code = args.splice(1).join(" ");
            let evaled = eval(code);


            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
            if (evaled.includes(bot.token)) {
                evaled = evaled.replace(bot.token, "no no no");

                if (evaled.includes(bot.token)) {
                    evaled = evaled.replace(bot.token, "no no no");
                }
            }
            if (evaled.includes(config.token)){
                evaled = evaled.replace(bot.token, "no no no ");

            }

            message.channel.send(clean(evaled), { code: "xl" });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
        

    }
}