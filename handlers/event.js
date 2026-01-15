module.exports = (client) => {
    const eventsPath = path.join(__dirname, '../events');
    fs.readdirSync(eventsPath).forEach(file => {
        const event = require(`${eventsPath}/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    });
};
