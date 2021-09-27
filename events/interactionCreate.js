module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		const timestamp = `[${interaction.createdAt.getHours()}:${interaction.createdAt.getMinutes()}:${interaction.createdAt.getSeconds()}]`
		console.log(`[INFO]`.blue + ` ${timestamp} In ${interaction.guild.name}#${interaction.channel.name}, ${interaction.user.tag} triggered an interaction.`);
	},
};
