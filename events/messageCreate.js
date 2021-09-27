const colors = require('colors');

module.exports = {
  name: 'messageCreate',
	execute(message) {
    const timestamp = `[${message.createdAt.getHours()}:${message.createdAt.getMinutes()}:${message.createdAt.getSeconds()}]`
		console.log(`[INFO]`.blue + ` ${timestamp} In ${message.guild.name}#${message.channel.name}, ${message.author.tag} said "${message.content}"`);

    // Regardless of the message length filtering, always make sure it is not 0
    // && message.content.length != 0
    if (!message.author.bot && message.content.length >= 15) {
      message.client.markov.addStates(message.content);
      message.client.hasStates = true;
      console.log('[MARKOV]'.green + ' Message added to markov states!');
    }
    // Say something randomly
    if (!message.author.bot && message.client.isTrained == true) {
      const messageChance = 0.05;
      const hit = Math.random();
      if (hit <= messageChance) {
        console.log('[MARKOV]'.green + ' Sending an unprompted message');
        const textToSend = message.client.markov.generateRandom(1999);
        message.channel.send(textToSend);
      }
    }
  },
};
