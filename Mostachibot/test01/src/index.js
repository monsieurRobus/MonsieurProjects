const { dotenv } = require("dotenv")
const {makeCall} = require("./mostachibot/mostachibot")
const {client} = require("./tmi/chat")

client.connect();

client.on('message', async (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;
  console.log(tags)
	if(message.toLowerCase().includes('mostachi')) {
		// "@alca, heya!"
    const answer = await makeCall(tags.username,message,50) 
		client.say(channel, `${answer}`);
	}
});

