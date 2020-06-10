const config = require("../../config")
module.exports = class say {
    constructor() {
        this.name = 'say',
            this.alias = ['say'],
            this.usage = `${config.prefix}say`
    }

    async run(bot, message, args) {
        let saymessage = message.content.substring(5)
        if(!saymessage) return;
        message.delete().catch(O_o => { });
        message.channel.send(saymessage);

    }
}