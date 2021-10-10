// Обработка команды /ping
function parse(msg, Discord) {

  if (msg.content.toLowerCase() === '/лето') {  //Embed сообщение про лето


    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#cc00ff')
	.setTitle('**Переход на летнее время!**')
  	.setURL('https://www.pinterest.ru/pin/941041284607455638/')
	.setAuthor('Ronoserver Services (for Ronoserver)', 'https://cdn.probot.io/ht0KnrUehX.png')
  .setImage('https://i.pinimg.com/originals/3a/03/cb/3a03cbb107af0da77dc4c9c9038544d7.png')
	.setThumbnail('https://i.pinimg.com/originals/13/e9/be/13e9befce82ede51c4a82e98f8cdb7e3.png')
  .setDescription('С 21 марта 2021 года Роносервер переходит на летнее время! \nОднако, в отличии от того, чтобы сдвинуть время вперед, время сдвигается НАЗАД.\nТеперь вы можете определять время суток по данным временным меткам:\n**Ночь: 1:00 – 4:00**\n**Утро: 4:00 – 11:00**\n**День: 11:00 – 18:00**\n**Вечер: 18:00 – 1:00**\n\nИспользуется МОСКОВСКОЕ время (gmt +3)\n\nДанное изменение повлияет на время, когда будет меняться иконка сервера и некоторые другие функции. Данное изменение будет действовать до 21 сентября 2021 года или до нового обновления!\n\nНадеемся, что изменения особо не навредят вам) \nПоздравляю всех с началом летнего счёта времени ^^\nИскренне,\nRonoserver Services')
	.setFooter('Ronoserver Services message provided by Ronopoldo#0185', 'https://probot.media/5T6WaVw0jo.png');

    msg.reply(exampleEmbed1)
  }
}
module.exports = { parse }