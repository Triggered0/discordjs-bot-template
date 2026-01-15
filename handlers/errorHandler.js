const { EmbedBuilder, codeBlock } = require("discord.js")

module.exports = async function handleError({ error, context, client }) {
    let errorEmbed = new EmbedBuilder()
        .setTitle('Bir hata oluştu!')
        .setDescription(codeBlock('js', error.message))
        .setColor('Red');
    console.error('ERROR!', error);
    if (context && typeof context.reply === 'function') {
        try { await context.reply({ embeds: [errorEmbed], ephemeral: true }); }
        catch (err) {
            try {
                if (typeof context.followUp === 'function') { await context.followUp({ embeds: [errorEmbed], ephemeral: true }); }
                else if (typeof context.editReply === 'function') { await context.editReply({ embeds: [errorEmbed] }); }
            }
            catch (e) { console.error(e); }
        }
    }
    else if (context && typeof context.channel?.send === 'function')
        try { await context.channel.send({ embeds: [errorEmbed] }); } catch (e) { console.error(e); }

    try {
        let desc = codeBlock('js', require('util').inspect(error, { depth: null }));
        let embed = new EmbedBuilder()
            .setDescription(desc)
            .setColor('Red');

        if (context && context.user)
            desc = `**Kullanıcı:** \`${context.user.tag} (${context.user.id})\`\n**Komut:** \`${context.commandName || context.customId || context.content || 'Bilinmiyor'}\`\n\n` + desc;

        await client.users.send(client.data.owners[0], { embeds: [embed] });
    }
    catch (e) { console.error(e); }
};
