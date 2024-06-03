const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Ping"),
    async execute(interaction, client) {
        await interaction.reply({
            content: `🏓 Pong: ${Math.round(client.ws.ping).toLocaleString()} ms`
        });
    }
}