module.exports = {
    name: 'ping',
    description: 'Ping command',
    async execute(message, args, client) {
        await message.reply('Pong!');
    }
};
