module.exports = {
  name: 'messageCreate',
	execute(message) {
    const time = message.createdAt
		console.log(`[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}] In ${message.guild.name}, ${message.author.tag} said "${message.content}" in #${message.channel.name}.`);
	},
};
