const fs = require('fs')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
	"parse": (args) => {
		let msg = args.msg

		if (msg.content.toLowerCase().startsWith('/set roblox')) {
			let xhr = new XMLHttpRequest();
			const args = msg.content.slice(`/био`).split(/ +/);
			SentUsername = args[2]

			try {
				let httprequest = 'https://api.roblox.com/users/get-by-username?username=' + SentUsername;

				xhr.open('GET', httprequest, true);

				xhr.send(); // (1)

				xhr.onreadystatechange = function () { // (3)
					try {
						if (xhr.readyState != 4) return;
						if (xhr.status != 200) {
							console.log(xhr.status + ': ' + xhr.statusText);
						} else {
							console.log(xhr.responseText);
						}
						var data = xhr.responseText;
						var jsonResponse = JSON.parse(data);
						let requestID = jsonResponse["Id"]

						if (typeof requestID !== 'undefined') {
							msg.reply("Пользователь " + jsonResponse["Username"] + " найден! Его ID равен: " + requestID)

							let robloxpath = './data/UserData/' + msg.author.id;
							if (!fs.existsSync(robloxpath)) {
								fs.mkdir(robloxpath, err => { })
							}

							fs.writeFile(robloxpath + '/roblox', requestID + '|' + SentUsername, err => { });
							console.log('Данные внесены!')
							msg.reply('Данные успешно внесены!')
						} else {
							var data = xhr.responseText;
							var jsonResponse = JSON.parse(data);
							msg.reply('Произошла ошибка! Пользователь не найден!\nКод ошибки: `' + jsonResponse["errorMessage"] + '`')
						}
						// console.log(JSON)
					} catch (err) {} 
				}
			} catch (err) {
				args.error(err)
				msg.reply('Скорее всего, ты ввёл недопустимые знаки!\nКод ошибки: `' + err + '`')
			}
		}
	}
}