module.exports = {
    name: 'eval',
    async execute(message, args, client) {
        if (!client.data.owners.includes(message.author.id)) return;
        try {
            let result;
            let code = args.join(' ');

            if (code.includes("await")) result = await eval(`(async () => { ${code.includes("return") ? "" : "return"} ${code} })()`);
            else result = await eval(code);

            if (typeof result !== 'string') result = require('util').inspect(result, { depth: null });

            let embed = new EmbedBuilder()
                .setColor('Green')
                .setTitle('Output')
                .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setDescription(`\`\`\`js\n${result}\n\`\`\``);
            await message.reply({ embeds: [embed] });
        } catch (error) {
            let embed = new EmbedBuilder()
                .setColor('Red')
                .setTitle('Error')
                .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL() })
                .setDescription(`\`\`\`js\n${error}\n\`\`\``);
            await message.reply({ embeds: [embed] });
        }
    }
};
