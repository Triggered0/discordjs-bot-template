const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Sample Context Menu')
        .setType(ApplicationCommandType.Message),
    async execute(interaction, client) {
        await interaction.reply({ content: 'Context menu used!', ephemeral: true });
    }
};
