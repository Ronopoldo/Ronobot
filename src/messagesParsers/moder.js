module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/модер') {
			let usid = msg.member.id;
			let msgurl = msg.url;
			let temporaly = ['__**<@', usid, '>**__ - роль модератора\n Сообщение:', msgurl];
			let Output = temporaly.join('');
			args.client.channels.cache.get('650732750294351883').send(Output).then(() => {
				msg.reply('✅ Всё прошло! ✅')
			})
		}
	}
}