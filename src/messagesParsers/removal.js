// Обработка команды /ping
function parse(msg, Discord) {
  if (msg.content.toLowerCase() === '/переезд') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const exampleEmbed4 = new Discord.MessageEmbed()
.setTitle("Третий переезд")
.setAuthor("Ronoserver Services", "https://images-ext-1.discordapp.net/external/sPU82I_kope1D0xI26HVnvxMUqiMUvXiS6RCqz5U6iI/https/cdn.probot.io/ht0KnrUehX.png","https://youtube.com/ronopoldo")
.setColor("#ffee00")
.setDescription("Всем привет, с вами Ronoserver Services... И, сегодня, мы вынуждены сказать одну важную для сервера новость... Возможно, для кого-то она прозвучит, как хорошая; а для кого-то как плохая... \n Начиная с субботы мы постепенно начинаем возвращаться на Звезду... Да, всё верно, вы не ослышались; мы вновь переезжаем на сервер Звезду, и для этого есть причины... Приношу огромные извенения за эти чёртовы неудобства... Будет ли это нашим последним переездом? Я не знаю... Да и никто не знает... \n Недавно, через голосование вы решили, что серверу нужно сделать обновление, улучшить его, и, осознав, насколько это будет трудно сделать с этим сырым сервером, который не трогали с 2019 года, я сделал вывод... Возврат на звезду... \n Да, для кого то это прозвучит странно, так как мы лишь недавно вернулись на этот сервер, однако, на звезде у нас было всё, чего нам не хватает сейчас! Звезда была совершенным сервером с более новыми технологиями, нежели на этом...\n Для кого то эта новость будет шоком, а кто-то примет её нормально, однако, это так... \n \n А сейчас небольшая информация про переезд.\n Во-первых, стоит отметить, что переезд не будет резким! Начнётся он в субботу, 3 апреля, и закончится лишь к началу мая; то есть, до мая вы сможете пользоваться как этим, так и тем серверами. Это я называю период адаптации.\n Однако, в любом случае, я рекомендую перейти на Звезду как можно скорее, чтобы возникало потом меньше проблем...\n\n Также, естественно, я бы не стал переезжать на сервер без переноса данных)\n **Почти все ваши данные будут сохранены и перенесены на Звезду!** \n\n Вот список того, что перенесётся на Звезду:\n Уровень (ранг)\n Ваш баланс и предметы в инвентаре \n И, самое главное, вам вернуться все редкие роли и роли за ивенты; их список будет предоставлен на Звезде в течении каникул (03.04-11.04). Для их восстановления вам понадобится иметь свой аккаунт на этом сервере, поэтому, просьба, раньше времени не покидать этот сервер.")

.setFooter("Прошу, не злитесь на меня... Искренне, Ronopoldo", "https://probot.media/5T6WaVw0jo.png")
.setImage("https://i.pinimg.com/originals/ee/a5/c9/eea5c918597c1a07cc7984377cb5a4f3.png")
	.addFields(
		{ name: 'Спасибо большое!', value: '\n\n\n\nРебята, огромное вам спасибо, что были, хоть и короткий промежуток времени, но на этом сервере... Прошу, не злиться на меня за  очередной переезд, даже, если вам и нравился этот роносервер... Поверьте, он останется в моём, и многих других сердцах надолго... Здесь мы встретили новый 2021 год, что очень неплохо для такой короткой жизни.... Ещё раз... Простите меня...\nЯ очень надеюсь, что вы не будете меня ненавидить за это сильное решение... Поверьте, к нему я шёл очень долго, однако, я счёл, что оно будет наиболее рациональным...\n\nМы никогда не забудем Роносервер... Спасибо, что стали частью его истории...\nИскренне\nRonopoldo, Ronoserver Services' }

	)
.setThumbnail("https://images-ext-2.discordapp.net/external/uOEi-1t9BBDJFTaoiqFZSB_7_YeZPG2jGgbFnwVbE0U/https/cdn.probot.io/7jmN0TqfM2.png?width=760&height=677")

    msg.reply(exampleEmbed4)
      msg.channel.send('https://discord.gg/B5HgSxtp')
  }
}

module.exports = { parse }