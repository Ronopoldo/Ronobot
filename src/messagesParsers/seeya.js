const Discord = require('discord.js')

module.exports = {
	"parse": (args) => { // Embed сообщение про переезд
		let msg = args.msg
		if (msg.content.toLowerCase() === '/seeya') {
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#ff0000')
				.setTitle('Вы находитесь на старом сервере!')
				.setURL('https://discord.gg/vw6GJCm')
				.setAuthor('Ronoserver services.', 'https://cdn.probot.io/ht0KnrUehX.png', 'https://youtube.com/Ronopoldo')
				.setThumbnail('https://cdn.probot.io/7jmN0TqfM2.png')
				.addFields(
					{ name: 'Мы переехали!', value: 'Хей! Сервер на котором вы находитесь неактивен с 9.12.2020 и более чем для просмотра истории каналов он не для чего не нужен! \n Просьба, присоединится на новый активный сервер перейдя по ссылке ниже.' },
					{ name: "We've moved!", value: 'Hey! This server is inactive since 12/9/2020 and it is not needed for anything more than viewing the channel history! \n Please, join the new working server by clicking on the link below.' },
				)
				.setFooter('Спасибо всем, кто как либо участвовал в жизни этого сервера! Мы его никогда не забудем...', 'https://cdn.probot.io/23L7NdK2Uq.png');
			msg.reply(exampleEmbed)
			msg.channel.send('https://discord.gg/vw6GJCm') // Отправка приглашения
		}
	}
}