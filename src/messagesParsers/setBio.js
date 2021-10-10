// Обработка команды /ping
function parse(msg, client, fs, Discord, xhr) {
  try{
  if (msg.content.toLowerCase().startsWith('/set bio'))
  {
            const args = msg.content.slice(`/био`).split(/ +/);
            let Convert1 = args.splice(2,args.length).join(' ')
            console.log(Convert1)
  let biopath = './data/UserData/' + msg.author.id;
        if (!fs.existsSync(biopath)) {
    fs.mkdir(biopath, err => {})
        }

        if (Convert1.length < 2048)
        {
          try{
             OldBio = fs.readFileSync(biopath + '/bio', "utf8");
              msg.reply('Держи свою старую Биографию, которую мы заменили: \n`' + OldBio + '`')
          }catch(err){}
          msg.reply('Отлично! Обновил твою биографию! Проверь её при помощи /био')
            fs.writeFile(biopath + '/bio', Convert1, err => {});
        }else{ msg.channel.send('Хей! Похоже, твоя биография больше 2048 символов. Пожалуйста сократи его ещё на столько символов: ' + (Convert1.length-2047).toString() + '  :3') }
}}catch(err){msg.reply('НЕПРЕДВИДЕННАЯ ОШИБКА!\n Сообщи о ней на GitHub бота, указав этот код: ' + err)}
}
module.exports = { parse }