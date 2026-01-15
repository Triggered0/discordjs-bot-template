module.exports = {
    commandName: 'sample',
    async execute(interaction, client) {
        const focusedValue = interaction.options.getFocused();
        const choices = ['option1', 'option2', 'option3'];
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice }))
        );
    }
};
