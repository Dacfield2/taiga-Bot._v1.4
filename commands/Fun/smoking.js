const config = require("../../config")
module.exports = class smoking {
    constructor() {
        this.name = 'smoking',
            this.alias = ['smoking', "smoke"]
    }
    async run(client, message, args) {
        message.delete()
        message.channel.send('**BISSSSHES JE FUME**').then(async msg => {
            setTimeout(() => {
                msg.edit('🚬');
            }, 500);
            setTimeout(() => {
                msg.edit('🚬 ☁ ');
            }, 1000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁ ');
            }, 1500);
            setTimeout(() => {
                msg.edit('🚬 ☁☁☁ ');
            }, 2000);
            setTimeout(() => {
                msg.edit('🚬 ☁☁');
            }, 2500);
            setTimeout(() => {
                msg.edit('🚬 ☁');
            }, 3000);
            setTimeout(() => {
                msg.edit('🚬 ');
            }, 3500);
            setTimeout(() => {
                msg.edit(`Smoke weed everiday`);
            }, 4000);
        })
    }
}