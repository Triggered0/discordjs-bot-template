module.exports = {
    customId: 'sample_button',
    async execute(interaction, client) {
        await interaction.reply({ content: 'Button clicked!', ephemeral: true });
    }
};
