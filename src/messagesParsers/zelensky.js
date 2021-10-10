// Обработка команды /ping
function parse(msg, Discord) {
  if (msg.content.toLowerCase() === '/зеленский') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const Zelensky = new Discord.MessageEmbed()
.setTitle("Получить роль для общения с Зеленским")
.setColor("#3797d7")
.setDescription("Если вы желаете, чтобы на некоторые ваши сообщения отвечал бот <@155149108183695360>, то можете включить реакцию ниже. Однако, вам стоит знать, что бот **БУДЕТ ВАС ОСКОРБЛЯТЬ**! Если вы не желаете видеть оскорбления в свой адрес, то не ставьте реакцию ниже.\n**ВАЖНО** - из-за ограничений на бота, введённых в апреле 2021 года, бот больше **НЕ РАЗВИВАЕТСЯ**. Это означает, что бот больше не сможет расширять свою базу данных в плане ответов и новых команд; всё,что он накопил до ограничений будет работать в стандартном режиме.")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://media.discordapp.net/attachments/698853696817070164/829711422115545109/DynoBot.png")

    msg.channel.send(Zelensky)
  }
}

module.exports = { parse }