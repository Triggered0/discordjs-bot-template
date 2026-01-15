module.exports = (client) => {
    const contextMenusPath = path.join(__dirname, '../interactions/contextMenus');
    fs.readdirSync(contextMenusPath).forEach(file => {
        const contextMenu = require(`${contextMenusPath}/${file}`);
        client.contextMenus.set(contextMenu.data.name, contextMenu);
    });
};
