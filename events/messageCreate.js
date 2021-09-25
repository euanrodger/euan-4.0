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
    // Say something randomly
    if (!message.author.bot && message.client.isTrained == true) {
      const messageChance = 0.05;
      const hit = Math.random();
      if (hit <= messageChance) {
        console.log('That\'s a hit, sending random message')
        const textToSend = message.client.markov.generateRandom(1999);
        message.channel.send(textToSend);
      }
    }
  },
};
