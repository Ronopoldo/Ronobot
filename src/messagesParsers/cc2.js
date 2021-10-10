// Обработка команды /ping
function parse(msg, Discord) {
  if (msg.content.toLowerCase() === '/cc2') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const cc2 = new Discord.MessageEmbed()
.setTitle("Получить роль дополнительных каналов общения")
.setColor("#ff0000")
.setDescription("Если вы хотите иметь доступ к большему количеству каналов, таких, как \n<#682656810653581359>\n<#664559620207017996>\n<#649003708948021268>\n<#671026327016701953>\n<#647052231400620032>\n<#665540249329467408>\n<#665540249329467408>\nто вы можете нажать на реакцию ниже.")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://i.pinimg.com/originals/db/49/6f/db496f1f678eca9d5b5d139516f3f956.png")

    msg.channel.send(cc2)
  }
}
module.exports = { parse }