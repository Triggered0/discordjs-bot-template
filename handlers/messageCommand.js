module.exports = (client) => {
    const commandsPath = path.join(__dirname, '../commands/message');
    fs.readdirSync(commandsPath).forEach(file => {
        const command = require(`${commandsPath}/${file}`);
        client.commands.set(command.name, command);
    });
};
