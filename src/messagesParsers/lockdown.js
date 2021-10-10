// Обработка команды /ping
function parse(msg) {

  if (msg.content.toLowerCase() === '/lockdown' || msg.content.toLowerCase() === '/secret') {
        msg.reply('https://cdn.discordapp.com/attachments/698853696817070164/796793748573913098/2.mp4');
  }
}

module.exports = { parse }