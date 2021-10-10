// Обработка команды /loop4
function parse(msg) {
      if (msg.content === "$loop4") { 
        if (!msg.member.hasPermission("ADMINISTRATOR")) return
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            msg.channel.send("Мда... Верят какому то дауну... Пиздец блять", 1*100)
            .catch(console.error); // add error handling here
        }, 10000); 
  }
}

module.exports = { parse }