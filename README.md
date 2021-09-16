# euan-4.0
Euan 4.0 is a personal discord bot that I'm making just for fun.

## Cloning
If you clone this repository for your own bot, you'll want to make sure the ignored files from `.gitignore` are included in your version of the bot. 

For `config.json` you'll want something along the lines of:
```
{
	"clientId": "000000000000000000",
	"guildId": "000000000000000000",
	"token": "aaa0a00a0a00a000a0a0a0a0a0a0a0a0a0a00a0a0a",
	"prefix": "-"
}
```

The IDs and token will change depending on your discord bot client which should be found [here](https://discord.com/developers/)

I haven't implemented anything using a prefix yet because i'm relying on slash commands for now.

# Features
## Markov Chain Messages [UNIMPLEMENTED]
Inspired by another (closed source) bot that would read messages and spit out new ones based on them using markov chains. That bot is offline now because reasons. I'm taking my own jab at it. My attempt will be solely based on providing for one server and I don't really plan on having it be viable beyond that.
