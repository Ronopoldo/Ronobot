module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content === "$loop4") {
			if (!msg.member.hasPermission("ADMINISTRATOR")) return
			setInterval(() => {
				msg.channel.send("Мда... Верят какому то дауну... Пиздец блять", 1 * 100)
			}, 10000);
		}
	}
}