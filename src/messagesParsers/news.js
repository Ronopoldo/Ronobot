const Discord = require("discord.js")

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/новости') {
			const news = new Discord.MessageEmbed()
				.setTitle("Оформить Новостную подписку")
				.setColor("#ffcc01")
				.setDescription("Хей! Если Вы желаете получать пинги о важных новостях, то Вы можете оформить Новостную Подписку!")
				.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
				.setThumbnail("https://i.pinimg.com/originals/8a/23/d1/8a23d170a00ac79e6ed670986bb54868.png")
			msg.channel.send(news)
		}
	}
}