const Discord = require("discord.js")

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase() === '/летоначалось') {
			const exampleEmbed5 = new Discord.MessageEmbed()
				.setTitle("**__ЛЕТО__**")
				.setAuthor("Ronoserver Services", "https://images-ext-1.discordapp.net/external/sPU82I_kope1D0xI26HVnvxMUqiMUvXiS6RCqz5U6iI/https/cdn.probot.io/ht0KnrUehX.png", "https://youtube.com/ronopoldo")
				.setColor("#ffee00")
				.setDescription("Всех искренне поздравляем с началом лета!\nОчень надеемся, что оно будет таким же крутым, как и в прошлом году, а может, даже лучше)\nМы все очень рады тому, что теперь все смогут отдохнуть от трудных 9 месяцев учёбы)\nРоносервер не меняется и продолжает работать в том же режиме, в котором он работал и в учебное время.\n\n\nОчень надеемся, что за лето вы вдоволь наиграетесь, нагуляетесь и начилитесь) Для кого то следующий год будет трудным и важным, поэтому это будет просто необходимо.\n\n\nБудем надеятся увидеть Вас летом на нашем сервере! Заходите, мы всегда Вам рады! Помните, Роносервер всегда готов поддержать Вас!\nЧто же... Вот и началась летняя пора! 1 ИЮНЯ! От лица Ronoserver Services я желаю Вам всем отличного отдыха\nИскренне\n-Ronopoldo")
				.setFooter("Всем счастливого отдыха!", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
				.setImage("https://i.pinimg.com/originals/9e/f7/8a/9ef78a4b75ea6af8da2c391cea5b686b.png")
				.setThumbnail("https://i.pinimg.com/originals/eb/f9/53/ebf953793ae2266726a2fc32893e9b12.png")
			msg.channel.send(exampleEmbed5)
		}
	}
}