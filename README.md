# euan-4.0
Euan 4.0 is a personal discord bot that I'm making just for fun.

## Cloning
If you clone this repository for your own bot, you'll want to make sure the ignored files from `.gitignore` are included in your version of the bot. 

Namely this will just be `config.json` for stuff like server/client IDs, your token, prefixes, and whatnot. This is alongside all the packages that would be found in `node_modules/` that are installed via `npm install`. So far the only packages I'm using are the ones used for discord.js, `js-markov`, and `colors`.

If none of this means anything to you, it's probably because you've never made a discord bot using discord.js before. Check out [this guide](https://discordjs.guide/#before-you-begin) so you at least know the basics.

Also, I have modified the `node_modules/discord.js/src/client/Client.js` file that comes with discord.js (which probably isn't the best idea but this is a personal hobby thing so I'm prepared to deal with the horrible consequences) *and* I'm pretty sure the modifications I've made could be a lot tidier. So just be aware of that, that could break things.

# Features
## Markov Chain Messages
Inspired by another (closed source) bot that would read messages and spit out new ones based on them using markov chains. That bot is offline now because reasons. I'm taking my own jab at it. My attempt will be solely based on providing for a small number of private servers and I don't really plan on having it be viable beyond that. For example, as of the time of writing this, the messages it spits out are based on **EVERY SINGLE CHANNEL** from **EVERY SINGLE SERVER** visible by the bot. Additionally, there's currently nothing in place to facilitate sharding. Not ideal for public use, so the closest I can get to a public release for now is uploading the source code and letting people use it with their own bots.
