const { Client, GatewayIntentBits, Collection, ActivityType } = require('discord.js');
require('dotenv').config();
fs = require('fs');
path = require('path');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers],
    rest: { timeout: 300000 },
    allowedMentions: { parse: ['roles', 'users'], repliedUser: true },
    presence: {
        activities: [{
            name: "Trîggered Development",
            type: ActivityType.Custom
        }]
    },
});

client.commands = new Collection();
client.slashCommands = new Collection();
client.events = new Collection();
client.buttons = new Collection();
client.modals = new Collection();
client.contextMenus = new Collection();
client.autocompletes = new Collection();
client.selectMenus = new Collection();

client.data = {
    owners: ['609101526597632051'],
    clientId: "CLIENT_ID",
    guildId: "GUILD_ID",
};
client.functions = {
    errorHandler: require('./handlers/errorHandler')
};

['event', 'messageCommand', 'slashCommand', 'button', 'modal', 'contextMenu', 'autocomplete', 'selectMenu'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);