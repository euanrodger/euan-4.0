const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info of the selected user, or user info for yourself.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s info to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username}'s tag: ${user.tag}\n${user.username}'s id: ${user.id}`);
		return interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	},
};
