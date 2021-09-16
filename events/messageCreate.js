module.exports = {
  name: 'messageCreate',
	execute(message) {
    const timestamp = `[${message.createdAt.getHours()}:${message.createdAt.getMinutes()}:${message.createdAt.getSeconds()}]`
		console.log(`${timestamp} In ${message.guild.name}, ${message.author.tag} said "${message.content}" in #${message.channel.name}.`);

    if (!message.author.bot) {
      message.client.markov.addStates(message.content);
      console.log('Message added to markov states!');
  }
  },
};
