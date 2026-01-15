const { REST, Routes } = require('discord.js');
require('dotenv').config();

module.exports = (client) => {
    const commandsPath = path.join(__dirname, '../commands/slash');
    const globalCommands = [];
    const guildCommands = [];
    fs.readdirSync(commandsPath).forEach(file => {
        const command = require(`${commandsPath}/${file}`);
        client.slashCommands.set(command.data.name, command);

        if (command.global) globalCommands.push(command.data.toJSON());
        else guildCommands.push(command.data.toJSON());

    });
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    (async () => {
        try {
            if (globalCommands.length > 0) {
                await rest.put(
                    Routes.applicationCommands(client.data.clientId), { body: globalCommands }
                );
                console.log("Global komutlar yüklendi.")
            }
            if (guildCommands.length > 0) {
                await rest.put(
                    Routes.applicationGuildCommands(client.data.clientId, client.data.guildId), { body: guildCommands }
                );
                console.log("Sunucu komutları yüklendi.")
            }
        }
        catch (error) {
            await client.functions.errorHandler({ error, context: null, client });
        }
    })();
};
