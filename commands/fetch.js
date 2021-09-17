const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fetch')
		.setDescription('Takes the latest messages in this channel and adds them to my log')
    .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to fetch')),
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
      if (!messageArray[i][1].author.bot && messageArray[i][1].content != '') {
        textArray.push(messageArray[i][1].content);
      }
    }

    interaction.client.markov.addStates(textArray);
    await interaction.reply({ content: 'Fetched!', ephemeral: true });
  },
};
