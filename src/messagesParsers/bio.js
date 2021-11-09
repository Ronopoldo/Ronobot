// Обработка команды /ping
function parse(msg, client, fs, Discord) {

let pingedUser = ''


if ((msg.content.toLowerCase().startsWith(`/био`) || (msg.content.toLowerCase().startsWith(`/bio`)))) {
  try{
    const args = msg.content.slice(`/био`).split(/ +/);
    if (args.length >= 2){
   pingedUser = args[1]
        pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
    }

        if (args.length >= 2){
   pingedUser = args[1]
    }
        if ((args.length >= 2) && (!args[1].includes('<@'))){
          pingedUser = '<@' + args[1] + '>'
          console.log(pingedUser)
    }

   if (args.length == 1){
     console.log('прошло')
     
      pingedUser = '<@' + msg.author.id +">"
   }

       if (args.length > 2){    
      msg.reply('Слишком много аргументов! После команды Вам следует написать лишь один аргумент - упомянание пользователя, его id или вообще не использовать аргументы.\nНе смотря на это, мы всё равно попробуем распознать упомянание')
   }


   if (pingedUser.includes('<@'))
   {
     pingedUser = pingedUser.replace("<@",'')
     pingedUser = pingedUser.replace("!",'')
     pingedUser = pingedUser.replace(">",'')
   }else {pingedUser = 'Не найдено пользователей! Используйте упомянание или его id, чтобы указать пользователя'}
   console.log(pingedUser)

// try{

// }catch(e){

// functionToHandleError(e);

// msg.reply('Йо! Произошла ошибка! Напиши <@544902183007813652> о ней. Код ошибки: ' + e)
// }
try{
stringpath = ("./data/UserData/" + pingedUser + '/roles')
let robloxpath = ("./data/UserData/" + pingedUser + '/roblox')
let colorPath = './data/UserData/' + pingedUser + '/color';
let biopath = './data/UserData/' + pingedUser + '/bio';
let youtubepath = './data/UserData/' + pingedUser + '/youtube';
let RobloxName = "Не привязан"
 let ROLES = 'Не привязаны'
 let RobloxName1 = 'ERROR'
 let RobloxLink = 'NULL'
 let RobloxId = ''
 let BIO = '__**У пользователя не установлена биография.**__\n Чтобы поставить биографию, напишите `/set bio [Биография]`\n\n В биографию Вы можете включить любые ссылки, упомянания и всё, что-бы Вы хотели, чтобы другие увиели. В биографии разрешается вставлять рекламу, не смотря на правила сервера.\n\n\nМаксимальная длина биографии 2048 символов. Форматирование текста принимается\nЕсли Вы не хотите, чтобы у Вас была биография и это сообщение, то пропишите `/set bio` без каких-либо аргументов.'

 let YOUTUBE = ''
 let YoutubeName = ''
 let YoutubeData = '**__Ютуб ещё не привязан!__**\nЧтобы привязать Ютуб канал, пропишите команду `/set youtube <Идентификатор канала | Полная ссылка на канал>`'

 console.log(pingedUser)
 try{
   //////////////////
client.users.fetch(pingedUser).then(myUser => {
    console.log(myUser.avatarURL()); 
     let DiscordAvatar = myUser.avatarURL();


 let authorImage = ''


if (fs.existsSync(colorPath)) {
  COLOR = fs.readFileSync(colorPath, "utf8");}else{COLOR = "#ff8800"}
if (fs.existsSync(stringpath)) {
  ROLES = fs.readFileSync(stringpath, "utf8");}
  if (fs.existsSync(biopath)) {
  BIO = fs.readFileSync(biopath, "utf8");}
    if (fs.existsSync(youtubepath)) {
  YOUTUBE = fs.readFileSync(youtubepath, "utf8");}
if (!ROLES) {ROLES = '_Отсутсвуют_'} 
authorImage = msg.author.defaultAvatarURL
authorLink = 'https://discord.gg/vw6GJCm'
if (fs.existsSync(robloxpath)) {
 tempRoblox =  fs.readFileSync(robloxpath, "utf8");
console.log(tempRoblox)
tempRobloxSplit = tempRoblox.split('|');

 RobloxName = tempRobloxSplit[1]
 RobloxId = tempRobloxSplit[0]
 RobloxLink = 'https://www.roblox.com/users/' + RobloxId + '/profile'
console.log('Name: ' + RobloxName + '; ID: ' + RobloxId)
authorImage = msg.author.defaultAvatarURL
authorImage = 'https://www.roblox.com/headshot-thumbnail/image?userId=' + RobloxId + '&width=420&height=420&format=png';
authorLink = RobloxLink
}else{RobloxName = 'Не привязан.'
RobloxLink = 'Привяжите при помощи /set roblox <Имя Пользователя>'}


if (YOUTUBE != '')
{
  let TempMassive = YOUTUBE.split('\n');
  YoutubeData = 'Подписчики: `' + TempMassive[5] + '`\nПросмотры: `' + TempMassive[3] + '`\nВидео: `' + TempMassive[4] + '`\nСсылка: https://youtube.com/channel/' + TempMassive[1] + '\n\n_Информация актуальна на ' + TempMassive[6] + '_' 
  YoutubeName = TempMassive[2]
}

let UserName = myUser.tag
// let pname = client.guilds.cache(544902879534907392).members.fetch(pingedUser).username
// console.log(pname)
       let embedreply = new Discord.MessageEmbed()
.setColor(COLOR)
.setAuthor(UserName, authorImage , authorLink)
.setThumbnail(DiscordAvatar)
.setDescription(BIO)
.addFields(
        { name: 'Roblox профиль: ' + RobloxName + ' (' + RobloxId +')', value: RobloxLink}, {name: 'YouTube: ' + YoutubeName, value: YoutubeData}, {name: 'Оцифрованные роли:', value: ROLES},)
.setFooter("Ronoserver Services - Центральное звено", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
msg.channel.send(embedreply)},
error => {msg.reply('Не удалось найти данные о пользователе. Вероятнее всего произошло что-то из следующего:\n1) Формат пользователя введён неправильно. Введите ID пользователя или упомяните его. Если Вы хотите посмотреть свой паспорт, то пропишите /био без каких-либо аргументов\n2) Пользователь ещё не выполнял цифравизацию ролей.\nКод ошибки: `' + error + '`')})
}catch(err){msg.reply(err)}}catch(err) {
  msg.reply('Не удалось найти данные о пользователе. Вероятнее всего произошло что-то из следующего:\n1) Формат пользователя введён неправильно. Введите ID пользователя или упомяните его. Если Вы хотите посмотреть свой паспорт, то пропишите /био без каких-либо аргументов\n2) Пользователь ещё не выполнял цифравизацию ролей.\nКод ошибки: `' + err + '`')};



}catch(err) {
  msg.reply('Не удалось найти данные о пользователе. Вероятнее всего произошло что-то из следующего:\n1) Формат пользователя введён неправильно. Введите ID пользователя или упомяните его. Если Вы хотите посмотреть свой паспорт, то пропишите /био без каких-либо аргументов\n2) Пользователь ещё не выполнял цифравизацию ролей.\nКод ошибки: `' + err + '`')}
}}
module.exports = { parse }