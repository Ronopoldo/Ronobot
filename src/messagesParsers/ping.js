// Обработка команды /ping
function parse(msg) {
  if (msg.content.toLowerCase() === '/ping') { //Команда пинга (все команды ниже работают по тому же принципу)
          msg.reply('ПОНГ БЛЯТЬ!'); //Ответ на сообщение ПЕРЕД вычислением пинга
          msg.channel.send(new Date().getTime() - msg.createdTimestamp + " милясякунт пинг нахуй!");  //Вычисление и вывод пинга (зарегистрированное время минус фактическое время)
    }
}

module.exports = { parse }