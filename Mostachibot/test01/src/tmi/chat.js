const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'mostachibot',
		password: 'oauth:kphau60nymsv3yykcvqw3hk66wlyeh'
	},
	channels: [ 'soymonsieur' ]
});

client.on('message', (channel, tags, message, self) => {


})

module.exports = {client}