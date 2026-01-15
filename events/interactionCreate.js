module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        const handleError = client.functions.errorHandler;
        if (interaction.isChatInputCommand()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) return;
            try {
                await command.execute(interaction, client);
            } catch (error) {
                await handleError({ error, context: interaction, client });
            }
        } else if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);
            if (button) {
                try {
                    await button.execute(interaction, client);
                } catch (error) {
                    await handleError({ error, context: interaction, client });
                }
            }
        } else if (interaction.isModalSubmit()) {
            const modal = client.modals.get(interaction.customId);
            if (modal) {
                try {
                    await modal.execute(interaction, client);
                } catch (error) {
                    await handleError({ error, context: interaction, client });
                }
            }
        } else if (interaction.isContextMenuCommand()) {
            const contextMenu = client.contextMenus.get(interaction.commandName);
            if (contextMenu) {
                try {
                    await contextMenu.execute(interaction, client);
                } catch (error) {
                    await handleError({ error, context: interaction, client });
                }
            }
        } else if (interaction.isAutocomplete()) {
            const autocomplete = client.autocompletes.get(interaction.commandName);
            if (autocomplete) {
                try {
                    await autocomplete.execute(interaction, client);
                } catch (error) {
                    await handleError({ error, context: interaction, client });
                }
            }
        } else if (interaction.isAnySelectMenu && interaction.isAnySelectMenu()) {
            const selectMenu = client.selectMenus.get(interaction.customId);
            if (selectMenu) {
                try {
                    await selectMenu.execute(interaction, client);
                } catch (error) {
                    await handleError({ error, context: interaction, client });
                }
            }
        }
    }
};
