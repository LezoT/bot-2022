const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    date: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a user from discord server")
}