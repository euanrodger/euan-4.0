const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play rock paper scissors with euan 4.0')
		.addIntegerOption(option =>
			option.setName('input')
				.setDescription('Your choice of rock, paper, or scissors')
				.setRequired(true)
				.addChoice('Rock', 0)
				.addChoice('Paper', 1)
				.addChoice('Scissors', 2)),

	async execute(interaction) {
		const optionArray = [['Rock', 0], ['Paper', 1], ['Scissors', 2]];
		const userplay = optionArray[interaction.options.getInteger('input')];
		const botplay = optionArray[Math.floor(Math.random() * optionArray.length)];

		await interaction.reply('You played: ' + userplay[0] + '\nI played: ' + botplay[0]);

		const diff = (botplay[1] - userplay[1]);
		if (diff == 0) {
			await interaction.followUp('It\'s a draw!');
		}
		else if (diff == 1 || diff == -2) {
			await interaction.followUp('I win!');
		}
		else if (diff == -1 || diff == 2) {
			await interaction.followUp('I lose...');
		}
	},
};
