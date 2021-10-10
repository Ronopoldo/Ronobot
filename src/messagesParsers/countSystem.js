// Обработка команды /ping
function parse(msg, Discord, client) {
  if (msg.channel.id === '863309558209576960') // айди анала со счётом
  {
    let data = fs.readFileSync("./data/CurrentCount", "utf8"); //нужен файл по дериктории ./data/ с названием CurrentCount содержащий ЦЕЛОЕ числовое значение - последнее названное число
    let neededdata = parseInt(data) * 2 //число, которое должно быть написано следующим
    if ( (msg.content.startsWith( neededdata + ' ')) ||    (msg.content === neededdata.toString()) || (msg.content.startsWith( neededdata + '\n')) ) 
      {
               fs.writeFileSync("./data/CurrentCount", neededdata);
       fs.writeFileSync("./data/CountMSGID", msg.id);
       let needc = msg.channel;
      var pindate = new Date();
      var pinhours = pindate.getHours() + 3
      var pinmonth = pindate.getMonth()+1
      if (pinhours > 23) { pinhours = pinhours - 24 }
      let chtopic = 'Считаем разряды двоичной системы до бесконечности! Последнее число: ' + data + ' (обновляется плохо из-за лимитов дискорда) \nПоследнее обновление: ' + pindate.getDate() + '.0' + pinmonth + '.' + pindate.getFullYear() + ' в ' + pinhours + ':' + pindate.getMinutes() + ':' + pindate.getSeconds()
       
       

       console.log(chtopic)
        needc.setTopic(chtopic)
       // msg.channel.send('✅ ' + neededdata + ' ✅')

     } else if (msg.author != client.user) 
     {
       console.log('123')
       msg.delete();
     }
  }
  // {
  //    if (oldMessage.channel.id === '863309558209576960') // айди анала со счётом
  //   {
  //     if (!oldMessage.author) return;
  //      let data = fs.readFileSync("./data/CurrentCount", "utf8"); //нужен файл по дериктории ./data/ с названием CurrentCount содержащий ЦЕЛОЕ числовое значение - последнее названное число
  //      console.log(oldMessage.content)
  //       let neededmsgid = fs.readFileSync("./data/CountMSGID", "utf8");
  //      if ((oldMessage.content.startsWith(data))  && (oldMessage.id === neededmsgid))
  //        {
  //         newMessage.delete();
  //         newMessage.channel.send('<@' + newMessage.member.id + '>: **' + data + '**')
  //        }
  //   }
  // }
}
module.exports = { parse }



// client.on("messageDelete", (messageDelete) => 
//   {
//       let neededmsgid = fs.readFileSync("./data/CountMSGID", "utf8");
//       if ((messageDelete.channel.id === '863309558209576960') && messageDelete.id === neededmsgid) // айди анала со счётом
//       {
//         let data = fs.readFileSync("./data/CurrentCount", "utf8"); //нужен файл по дериктории ./data/ с названием CurrentCount содержащий ЦЕЛОЕ числовое значение - последнее названное число
//         console.log(messageDelete.content)
   
//         if (messageDelete.content.startsWith(data))
//           {
//            messageDelete.channel.send('<@' + messageDelete.member.id + '>: **' + data + '**')
//           }
//       }
//   }
// );