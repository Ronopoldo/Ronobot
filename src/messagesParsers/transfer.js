module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/трансфер') {
			/*try {
			  let FileData = fs.readFileSync('./data/UserData1/' + msg.author.id, "utf8");
			  let newpath = './data/UserData/' + msg.author.id;
	  
	  
			  if (!fs.existsSync(newpath + '/roles')) {
				fs.mkdir(newpath, err => { })
				fs.writeFile(newpath + '/roles', '', err => { });
				fs.appendFile(newpath + '/roles', FileData, err => { })
				msg.reply('Данные успешно перенесены! Проверь их при помощи /био :3')
			  } else {
				msg.reply('Хей! Данные уже перенесены! Если ты хочешь добавить новые роли, то пропиши /скан :)')
			  }
			} catch (err) {
			  msg.reply('Хей! Видимо по всему, ты ещё ни разу ни оцифровывался. Эта команда не для тебя! Пропиши /скан и всё :) Если ты считаешь, что произошла ошибка, то напиши <@544902183007813652>')
			}*/
			msg.reply('Хей! Видимо по всему, ты ещё ни разу ни оцифровывался. Эта команда не для тебя! Пропиши /скан и всё :) Если ты считаешь, что произошла ошибка, то напиши <@544902183007813652>')
		}
	}
}