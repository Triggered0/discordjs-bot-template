module.exports = (client) => {
    const selectMenusPath = path.join(__dirname, '../interactions/selectMenus');
    fs.readdirSync(selectMenusPath).forEach(file => {
        const selectMenu = require(`${selectMenusPath}/${file}`);
        client.selectMenus.set(selectMenu.customId, selectMenu);
    });
};
