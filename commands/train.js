const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('train')
		.setDescription('Train euan 4.0 on all the messages in its log')
    .addIntegerOption(option => option.setName('order').setDescription('used for "dividing the states into n-grams"')),
  async execute(interaction) {
    await interaction.deferReply();

    if (interaction.client.hasStates == true) {
      const order = interaction.options.getInteger('order');
      interaction.client.markov.train(order);
      interaction.client.isTrained = true;
      await interaction.followUp('All trained up!');
    }
    else {
      await interaction.followUp({content: 'I need to log valid messages before I can be trained!', ephemeral: true })
    }
  },
};
