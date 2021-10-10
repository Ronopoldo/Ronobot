// Обработка команды /ping
function parse(msg, Discord) {

  if (msg.content.toLowerCase() === '/nabor') { //Embed сообщение про набор


    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#9013FE')
	.setTitle('ПЯТЫЙ НАБОР В АДМИНИСТРАЦИЮ СЕРВЕРА')
	.setAuthor('Ronoserver Services (for Ronoserver)', 'https://cdn.probot.io/ht0KnrUehX.png')
  .setImage('https://probot.media/FqnirRFWDF.png')
	.setThumbnail('https://probot.media/6NLtslrqWt.png')
  .setDescription('Хей! Всем привет!\nДобро пожаловать на 5-ый по счёту набор в администрацию/модерацию сервера.\nНабор будет проходить по стандартным правилам, с которыми вы ознакомитесь чуть ниже.\nВсё максимально просто: если вы тот, кто желает избираться, то вы должны убедится что подходите требованиям:\n- У вас должен быть актив на удовлетворительном уровне\n- Вы готовы уделять время Роносерверу\n- Вы соблюдаете правила\n- У вас есть хорошее отношение с коммьюнити сервера\n- Вы готовы быть админом\n\nНа этом вроде всё :3\n\nЕсли вы соответствуете данным требованиям, то спокойно прописывайте команду /administrator или /moderator (в зависимости на что вы собираетесь претендовать; к администрации требования выше применяются намного жёсче, нежели к модерации) и ждите итогов голосования!\n\nТакже, те, кто будет спамить командами автоматически будет отстранён от наборов\n\nВроде бы на этом всё! Если вы собираетесь участвовать в наборе, то желаю вам удачи ;) Результаты будут известны на днях\nЕще увидимся, будущие сотрудники Роносервера\nИскренне\nRonopoldo\nRonoserver Services')
	.setFooter('Ronoserver Services message provided by Ronopoldo#0185', 'https://probot.media/5T6WaVw0jo.png');

    msg.reply(exampleEmbed1)
  }

}
module.exports = { parse }