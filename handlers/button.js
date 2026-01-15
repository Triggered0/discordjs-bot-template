module.exports = (client) => {
    const buttonsPath = path.join(__dirname, '../interactions/buttons');
    fs.readdirSync(buttonsPath).forEach(file => {
        const button = require(`${buttonsPath}/${file}`);
        client.buttons.set(button.customId, button);
    });
};
