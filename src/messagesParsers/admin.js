module.exports = {
	"parse": (args) => {
		let msg = args.msg
		let client = args.client
		if (msg.content.toLowerCase() === '/админ') {
			let usid = msg.member.id;
			let msgurl = msg.url;
			let temporaly = ['__**<@', usid, '>**__ - роль администратора\n Сообщение:', msgurl];
			let Output = temporaly.join('');
			client.channels.cache.get('650732750294351883').send(Output).then(() => {
				msg.reply('✅ Всё прошло! ✅')
			})
		}
	}
}