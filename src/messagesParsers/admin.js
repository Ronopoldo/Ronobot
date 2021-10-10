// Обработка команды /ping
function parse(msg, Discord, client) {
  if (msg.content.toLowerCase() === '/админ') { //Embed сообщение про третий переезд (шутка на 1 апреля)
    let usid = msg.member.id;
    let msgurl = msg.url;
    let temporaly = ['__**<@', usid,'>**__ - роль администратора\n Сообщение:', msgurl];
    let Output = temporaly.join('');
  client.channels.cache.get('650732750294351883').send(Output)

  msg.reply('✅ Всё прошло! ✅')
  }
}
module.exports = { parse }