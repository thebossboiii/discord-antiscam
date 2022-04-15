# discord-antiscam
Anti scam/phishing link module for discord

## Installation
```
npm install discord-antiscam
````

## Usage 

- **Example-1 (Common use Good for testing)**
```js
const discord_antiscam = require("discord-antiscam")
let msg = "Hello check this , http://academy-form.com/"
discord_antiscam(msg).then(console.log);
// You can change the link in the msg to check if it is in the db or not
//If it returns "true" it is in the scam database
//If it returns "false" it is not in the scam database
 ```

 - **Example-2 (discord.js-v12)**
```js
const catchscams = require("discord-antiscam")
const discord = require('discord.js');

const client = new discord.Client({
	intents: 32767,
})
client.on('ready', () => {
    console.log('Ready')
})

client.login("Your discord bot token");
client.on('message', async message => {
	catchscams(message.content).then(x => {
		if (x == true)
        message.delete()
        console.log("A message on a server was recently sent it is detected to be a malicious" ,x)
	})
})
```

- **Example-3 (discord.js-v13)**
```js
const catchscams = require("discord-antiscam")
const discord = require('discord.js');

const client = new discord.Client({
	intents: 32767,
})
client.on('ready', () => {
    console.log('Ready')
})

client.login("Your discord bot token");
client.on('messageCreate', async message => {
	catchscams(message.content).then(x => {
		if (x == true)
        message.delete()
        console.log("A message on a server was recently sent it is detected to be a malicious" ,x)
	})
})
```
### Note: This is a modified version of catchscam.js and has a bigger database.
## Credits :
- ### [Thebossboiii](https://github.com/thebossboiii/) [ discord-antiscam](https://github.com/thebossboiii/discord-antiscam)
- ### [catchscam.js](https://www.npmjs.com/package/@bryendaco/catchscam.js)
- ### [discord-phishing-links](https://github.com/nikolaischunk/discord-phishing-links)

  
