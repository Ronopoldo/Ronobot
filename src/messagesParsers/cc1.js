const Discord = require("discord.js")

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/cc2') {
			let cc1 = new Discord.MessageEmbed()
				.setTitle("Получить роль дополнительных каналов информации")
				.setColor("#d51dff")
				.setDescription("Если вы хотите иметь доступ к большему количеству каналов, таких, как \n<#703395583871942706>\n<#695689401350488196>\n<#698954192169074768>\nто вы можете нажать на реакцию ниже.")
				.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
				.setThumbnail("https://i.pinimg.com/originals/d1/96/bd/d196bdeabe2f67b0fb41205e86ee35b8.png")

			msg.channel.send(cc1)
		}
	}
}