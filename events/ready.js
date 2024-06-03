const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`[${client.shard.ids}] Ready! Logged in as ${client.user.tag}`);
    },
};