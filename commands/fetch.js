const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fetch')
		.setDescription('Takes the latest messages in this channel and adds them to my log')
    .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to fetch').setRequired(true)),
	async execute(interaction) {
    const amount = interaction.options.getInteger('amount');
		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
		}

    // Get message data into an Array
    var messageArray = []
    await interaction.channel.messages.fetch({ limit: amount }).then(messages => messageArray = Array.from(messages));

    //  Get message content from message data
    var textArray = []
    for (let i = 0; i < messageArray.length; i++) {
			// Regardless of the message length filtering, always make sure it is not 0
			// && messageArray[i][1].content.length != 0
      if (!messageArray[i][1].author.bot && messageArray[i][1].content.length >= 15) {
        textArray.push(messageArray[i][1].content);
      }
    }

		if (textArray.length != 0) {
			interaction.client.markov.addStates(textArray);
			interaction.client.hasStates = true;
			await interaction.reply({ content: 'Fetched!', ephemeral: true })
		} else {
			await interaction.reply({ content: 'Hmmm... Looks like there weren\'t any valid messages.', ephemeral: true });
		}
  },
};
