module.exports = (client) => {
    const modalsPath = path.join(__dirname, '../interactions/modals');
    fs.readdirSync(modalsPath).forEach(file => {
        const modal = require(`${modalsPath}/${file}`);
        client.modals.set(modal.customId, modal);
    });
};
