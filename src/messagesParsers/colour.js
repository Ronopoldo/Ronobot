const fs = require('fs')
module.exports = {
	"parse": (args) => {
		let msg = args.msg
		try {
			if ((msg.content.toLowerCase().startsWith('/set colour')) || (msg.content.toLowerCase().startsWith('/set color'))) {
				const args = msg.content.slice(`/био`).split(/ +/);
				Color = args[2]
				let colorPath = './data/UserData/' + msg.author.id;
				let counter = 0
				let active = true
				let failed1 = false
				let failed2 = false
				let DetailedColor = Color.split('');
				if ((DetailedColor.length == 6) || (DetailedColor.length == 7)) {
					DetailedColor[counter] = DetailedColor[counter].toLowerCase()
					if ((DetailedColor[counter] == '1') || (DetailedColor[counter] == '2') || (DetailedColor[counter] == '3') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '4') || (DetailedColor[counter] == '5') || (DetailedColor[counter] == '6') || (DetailedColor[counter] == '7') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '8') || (DetailedColor[counter] == '9') || (DetailedColor[counter] == 'a') || (DetailedColor[counter] == 'b') || (DetailedColor[counter] == 'c') || (DetailedColor[counter] == 'nowDate') || (DetailedColor[counter] == 'e') || (DetailedColor[counter] == 'f') || (DetailedColor[counter] == '#') || (DetailedColor[counter] == '0')) {
						console.log(DetailedColor[counter] + ' Прошло! ПЕРВИЧНЫЙ ТЕСТ')
					} else {
						failed1 = true
						active = false
					}

					while (active == true) {
						counter = counter + 1
						DetailedColor[counter] = DetailedColor[counter].toLowerCase()
						console.log('VVVV Начат цикл ' + counter + ' | Длина ' + DetailedColor.length + ' | символ ' + DetailedColor[counter])

						if (counter == DetailedColor.length - 1) {
							console.log('Бля! Страшно! Вырубаем')
							active = false
						}
						if ((DetailedColor[counter] == '1') || (DetailedColor[counter] == '2') || (DetailedColor[counter] == '3') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '4') || (DetailedColor[counter] == '5') || (DetailedColor[counter] == '6') || (DetailedColor[counter] == '7') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '8') || (DetailedColor[counter] == '9') || (DetailedColor[counter] == 'a') || (DetailedColor[counter] == 'b') || (DetailedColor[counter] == 'c') || (DetailedColor[counter] == 'nowDate') || (DetailedColor[counter] == 'e') || (DetailedColor[counter] == 'f') || (DetailedColor[counter] == '0')) {
							console.log(DetailedColor[counter] + ' Прошло!')
						} else {
							console.log(DetailedColor[counter] + ' НЕ ПРОШЛО!')
							failed2 = true
							active = false
						}
						console.log('После теста выше значиние провала равно ' + failed2 + ', значение цикла ' + active + ',а длина массива ' + DetailedColor.length)
						console.log()
					}
				} else {
					console.log('Пидор! Норм длину вводи, а не ' + DetailedColor.length)
					failed1 = true
					failed2 = true
				}
				console.log(failed1 + '<- 1 | 2 ->' + failed2)
				if ((failed1 == false) && (failed2 == false)) {
					if (!fs.existsSync(colorPath)) {
						fs.mkdir(colorPath, err => { })
					}
					if (DetailedColor.length == 6) {
						Color = '#' + Color
					}
					fs.writeFile(colorPath + '/color', Color, err => { });
					console.log('Данные внесены!')
					msg.reply('Хей! Данные успешно внесены! Цветовой код рамки: ' + Color)
				} else {
					msg.reply('Хей! Похоже, что ты ввёл код неправильно. Необходимо ввести код в формате HEX. Например, #ff19a4')
				}
			}
		} catch (err) {
			args.error(err)
			msg.reply(`Прости! Что-то сломалось :( Напиши на GitHub бота об ошибке, пожалуйста и укажи данный код: \`${err}\``)//Ондрей блять что ты там делаешь сука?
		}
	}
}