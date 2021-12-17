module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/шоуталантов') {
			let testRole = msg.guild.roles.cache.find(role => role.id == "866536300958056498")
			msg.member.roles.add(testRole)
			msg.channel.send('✅Заявка на участие прошла✅')
		}
	}
}