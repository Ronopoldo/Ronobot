const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
//const talkedRecently = new Set();

const port = 3000; { // server
	(new require('http').Server((req, res) => {
		res.writeHead(200, {
			'Content-Type': '*/*;charset=utf-8'
		})
		res.end('ВАУ БЛЕН  ВСЁ РАБОТАЕТ! АХРЕНЕЕТЬЬ\nPS - консоль немного сдохла, мне лень ее чинить)') // где буква ё?
	})).listen(port)
	console.log(`Локальный адрес: http://localhost:${port}`)
}

let messageParsers = {}; {
	const dir = fs.readdirSync("./src/messagesParsers")
	for (let i = 0; i < dir.length; i++) {
		let name = dir[i]
		if (!name.endsWith(".js")) continue
		let required = require(`./src/messagesParsers/${name}`)
		if (required?.parse === undefined) continue
		messageParsers[name.substr(0, name.length - 3) /* to delete .js at the end */] = required.parse
	}
}

let guild

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('тип рабет');
	client.user.setStatus('idle')
	client.user.setActivity('хентай :P', { type: 'WATCHING' });
	console.log('тип рабет 2')
	guild = client.guilds.cache.get("544902879534907392")
});

const error = (err) => {
	/* типа обработчик ошибок, если хочешь пиши другой обработчик
	(тут собираются ошибки со всех частей, кроме тех что могут выдать ошибку даже с правильным кодом (типо доступа в интернет)) */
	console.log(err)
}

process.on("uncaughtException", error)


client.on('message', msg => {
	let args = {
		"msg": msg,
		"client": client,
		"error": error
		//"talkedRecently": talkedRecently
	}

	for (k in messageParsers) {
		try {
			messageParsers[k](args)
		} catch (err) {
			error(`парсер "${k}" выдал ошибку: ${err}`)
		}
	}
})

client.login(process.env.DISCORD_TOKEN); //Получение переменной содержащей токен (засекречена)