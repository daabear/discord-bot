// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);

client.on("messageCreate", (message) => {
	if (message.author.bot) return;

	const value = message.content.toLowerCase();

	switch (true) {
		case value.includes("jersey"):
			message.reply("Five fuckin' Families and we got this other pygmy thing over in Jersey");
			break;
		case value.includes("20") || value.includes("twenty"):
			{
				const twentyYearsReply = [
					"Twenty years in the can I wanted manicott', but I compromised. I ate grilled cheese off the radiator instead. I wanted to fuck a woman, but I compromised. I jacked off into a tissue. You see where I'm goin'?",
					"Twenty years inside, not a fuckin' peep. For what? To protect the likes of fuckin' Doc Santoro and Rusty Millio?",
					"I did twenty fuckin' years!",
				];
				message.reply(responses[Math.floor(Math.random() * twentyYearsReply.length)]);
				break;
			}
		case value.includes("shah of iran"):
			message.reply("You know that fat cocksucka says I look like the Shah of Iran?");
			break;
		case value.includes("cry"):
			message.reply(`My estimation of ${message.author.toString()} as a man just fuckin' plummeted`);
			break;
		case value.includes("3") || value.includes("three"):
			message.reply("Let me tell ya a couple of tree things");
			break;
		case value.includes("scrap"):
			message.reply("There's no scraps in my scrapbook");
			break;
		case value.includes("tony b") || value.includes("blundetto"):
			message.reply("That animal Blundetto, I can't even say his name");
			break;
		case value.includes("business") || value.includes("financial"):
			message.reply("Charles Schwab ova here");
			break;
		case value.includes("uncle"):
			message.reply("Uncle Philly my ass!");
			break;
		case value.includes("compromise"):
			message.reply(" You want compromise, how's this? Twenty years in the can I wanted manicott', but I compromised. I ate grilled cheese off the radiator instead. I wanted to fuck a woman, but I compromised. I jacked off into a tissue. You see where I'm goin'?");
			break;
	}
});
