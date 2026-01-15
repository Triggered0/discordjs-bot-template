const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    global: false,
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Komut ve event dosyalarını yeniden yükler.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        if (interaction.user.id !== client.data.ownerId) {
            return interaction.reply({ content: 'Bu komutu sadece bot sahibi kullanabilir.', ephemeral: true });
        }
        try {
            ['message', 'slash'].forEach(type => {
                client[`${type}Commands`].clear();
                const dir = `../commands/${type}`;
                fs.readdirSync(path.join(__dirname, dir)).forEach(file => {
                    delete require.cache[require.resolve(path.join(__dirname, dir, file))];
                });
            });
            client.events.clear();
            fs.readdirSync(path.join(__dirname, '../events')).forEach(file => {
                delete require.cache[require.resolve(path.join(__dirname, '../events', file))];
            });
            ['messageCommand', 'slashCommand', 'event'].forEach(handler => {
                delete require.cache[require.resolve(`../handlers/${handler}`)];
                require(`../handlers/${handler}`)(client);
            });
            await interaction.reply({ content: 'Komutlar ve eventler yeniden yüklendi!', ephemeral: true });
        } catch (error) {
            await client.functions.errorHandler({ error, context: interaction, client });
        }
    }
};
