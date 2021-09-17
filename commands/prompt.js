const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prompt')
		.setDescription('Get euan 4.0 to spit something out.'),
  async execute(interaction) {
    if (interaction.client.isTrained == true) {
      const message = interaction.client.markov.generateRandom(1999);
      await interaction.reply({ content: message });
    }
    else {
      await interaction.reply({ content: 'I need to be trained before I can start talking!', ephemeral: true });
    }
  },
};
