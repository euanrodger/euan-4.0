const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the bot\'s ping'),
	async execute(interaction) {
		await interaction.reply({ content: `pong! ${interaction.client.ws.ping}ms` });
	},
};
