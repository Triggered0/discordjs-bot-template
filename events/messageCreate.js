module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot) return;
        const args = message.content.trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);
        if (!command) return;
        try {
            await command.execute(message, args, client);
        } catch (error) {
            await client.functions.errorHandler({ error, context: message, client });
        }
    }
};
