// Обработка команды /ping
function parse(msg, Discord, client) {
client.on('message', msg => {
  if (msg.content.toLowerCase() === '/emos') { //Embed сообщение про третий переезд (шутка на 1 апреля)
msg.channel.send('<a:PolarBearWalkin:885982963785949235><:dafaq:885984565607432232>')

  }
})
}
module.exports = { parse }