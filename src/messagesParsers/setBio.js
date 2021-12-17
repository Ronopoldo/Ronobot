const fs = require("fs")

module.exports = {
	"parse": (args_passed) => {
		let msg = args_passed.msg
		
		if (msg.content.toLowerCase().startsWith('/set bio')) {
			const args = msg.content.slice(`/био`).split(/ +/);
			let Convert1 = args.splice(2, args.length).join(' ')
			console.log(Convert1)
			let biopath = './data/UserData/' + msg.author.id;
			if (!fs.existsSync(biopath)) {
				fs.mkdir(biopath, err => { })
			}

			if (Convert1.length < 2048) {
				try {
					OldBio = fs.readFileSync(biopath + '/bio', "utf8");
					msg.reply(`Держи свою старую Биографию, которую мы заменили:\n\`${OldBio}\``)
				} catch (err) { } // тут обработчика пустой
				msg.reply('Отлично! Обновил твою биографию! Проверь её при помощи /био')
				fs.writeFile(biopath + '/bio', Convert1, err => { });
			} else {
				msg.channel.send(`Хей! Похоже, твоя биография больше 2048 символов. Пожалуйста сократи его ещё на столько символов: ${Convert1.length - 2047}  :3`)
			}
		}
	}
}