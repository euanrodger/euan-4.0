module.exports = {
  name: 'messageCreate',
	execute(message) {
    const timestamp = `[${message.createdAt.getHours()}:${message.createdAt.getMinutes()}:${message.createdAt.getSeconds()}]`
		console.log(`${timestamp} In ${message.guild.name}, ${message.author.tag} said "${message.content}" in #${message.channel.name}.`);

    // Regardless of the message length filtering, always make sure it is not 0
    // && message.content.length != 0
    if (!message.author.bot && message.content.length >= 15) {
      message.client.markov.addStates(message.content);
      message.client.hasStates = true;
      console.log('Message added to markov states!');
  }
  },
};
