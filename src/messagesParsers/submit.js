// Обработка команды /ping
function parse(msg, Discord, client) {
  const talkedRecently = new Set();
  if (msg.content.toLowerCase().startsWith('/submit') && msg.author.id != '664263594002612263')     if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Защита от спама - ждите 5 секунд");
    } else {{
      const guild = client.guilds.cache.get("544902879534907392");
      let publicashionCh = guild.channels.cache.get("894716549498302554")
      try{
        publicashionCh.send(msg.author.tag + '(' + msg.author.id + ') кинул это:\n' + msg.content)
        msg.attachments.forEach(attachment => {
	const ImageLink = attachment.url;
	publicashionCh.send(ImageLink)
});
        console.log(msg.attachments)
        msg.reply('Новость успешно отправлена!')
      }catch(err){
        msg.reply('Очень странно, но произошла ошибка! Напиши на GitHub бота о ней.\n Также укажи код: ' + err)
      }
    
}
talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 5000);
    }
    
    
}
module.exports = { parse }