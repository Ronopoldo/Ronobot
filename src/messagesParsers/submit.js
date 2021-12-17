const talkedRecently = new Set();

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase().startsWith('/submit') && msg.author.id != '664263594002612263') {
			if (talkedRecently.has(msg.author.id)) {
				return msg.channel.send("Защита от спама - ждите 5 секунд");
			}
			const guild = client.guilds.cache.get("544902879534907392");
			let publicashionCh = guild.channels.cache.get("894716549498302554")
			try {
				publicashionCh.send(`${msg.author.tag}(${msg.author.id})кинул это:\n${msg.content}`)
				msg.attachments.forEach(attachment => {
					const ImageLink = attachment.url;
					publicashionCh.send(ImageLink)
				});
				console.log(msg.attachments)
				msg.reply('Новость успешно отправлена!')
			} catch (err) {
				args.error(err)
			}

			talkedRecently.add(msg.author.id);

			setTimeout(() => {
				talkedRecently.delete(msg.author.id);
			}, 5000);
		}
	}
}