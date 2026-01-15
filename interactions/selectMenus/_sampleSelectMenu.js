module.exports = {
    customId: 'sample_select_menu',
    async execute(interaction, client) {
        await interaction.reply({ content: `Seçilen: ${interaction.values.join(', ')}`, ephemeral: true });
    }
};
