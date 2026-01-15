module.exports = {
    customId: 'sample_modal',
    async execute(interaction, client) {
        await interaction.reply({ content: 'Modal submitted!', ephemeral: true });
    }
};
