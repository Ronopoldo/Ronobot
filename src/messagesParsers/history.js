const Discord = require("discord.js")

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/история') {
			const history = new Discord.MessageEmbed()
				.setTitle("Получить роль для просмотра Истории")
				.setColor("#ead946")
				.setDescription("Хей! Если вы являетесь олдом или просто хотите посмотреть закрытые каналы, то можете нажать реакцию ниже и получить роль для просмотра старых каналов.")
				.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
				.setThumbnail("https://media.discordapp.net/attachments/768414683019345931/841705746857197628/hourglass-clipart-hour-18.png?width=669&height=669")
			msg.channel.send(history)
		}
	}
}