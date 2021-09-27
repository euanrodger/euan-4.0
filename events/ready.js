const colors = require('colors');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`[INFO]`.blue + ` Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity('your inane ramblings', { type: 'LISTENING' });
		console.log('[WARNING]'.red + ' EUAN 4.0 IS ONLY INTENDED FOR USE ON A SMALL NUMBER OF PRIVATE SERVERS'.white + '          [WARNING]'.red);
		console.log('[WARNING]'.red + ' USING THE MARKOV CHAIN FEATURES IN A PUBLIC SENSE COULD BE A PRIVACY VIOLATION!'.white + ' [WARNING]'.red);
	},
};
