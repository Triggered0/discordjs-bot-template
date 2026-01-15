module.exports = (client) => {
    const autocompletesPath = path.join(__dirname, '../interactions/autocompletes');
    fs.readdirSync(autocompletesPath).forEach(file => {
        const autocomplete = require(`${autocompletesPath}/${file}`);
        client.autocompletes.set(autocomplete.commandName, autocomplete);
    });
};
