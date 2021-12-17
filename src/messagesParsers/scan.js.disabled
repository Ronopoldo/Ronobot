// Обработка команды /ping
function parse(msg, Discord, client, fs, talkedRecently) {

  if (msg.content.toLowerCase() === '/скан')     if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Хей! Команду можно использовать лишь раз в 2 часа! Пожалуйста, подожди ещё немного :3");
    } else {{
    let filepath = ["./data/UserData/" + msg.author.id + '/roles'];
    console.log(filepath)

    let stringpath = filepath.join('').toString();
    let activetemp = false
        console.log(stringpath.toString() instanceof String);


try {
  if (!fs.existsSync(stringpath)) {
    fs.mkdir("./data/UserData/" + msg.author.id, err => {})
    fs.writeFile(stringpath, '', 'utf8', (err) => {
  if (err) throw err;
  console.log('Данные были добавлены в конец файла!');
});
    msg.reply('Файл создан! (впервые)')
        }
} catch(err) {
  console.error(err)
}

try {
  if (!fs.existsSync("./data/BACKUPROLES/" + msg.author.id)) {
    fs.writeFile("./data/BACKUPROLES/" + msg.author.id, '', 'utf8', (err) => {
  if (err) throw err;
  console.log('Данные были добавлены в конец файла!');
});
    msg.reply('Бэкап файл создан! (впервые)')
        }
} catch(err) {
  console.error(err)
}




let ScanCount = 0
let NewFoundCount = 0
let botresp = ''
botmsg = msg.channel.send('Сканирование ролей').then((sentMessage) =>
{

let FileData = fs.readFileSync(stringpath, "utf8");



function CheckRole(RoleID, DataName)
{
if ((msg.member.roles.cache.has(RoleID)) && (!FileData.includes(DataName)))
    {
    NewFoundCount = NewFoundCount + 1;
    // botmsg.edit(NewFoundCount)
        fs.appendFile(stringpath, DataName + '\n', 'utf8', (err) => {
  if (err) throw err;
});

 fs.appendFile("./data/BACKUPROLES/" + msg.author.id, DataName + '\n', 'utf8', (err) => {
  if (err) throw err;
});
   }

  ScanCount = ScanCount + 1;

    let embedreply = new Discord.MessageEmbed()
.setTitle("Сканирование запущено...")
.setColor("#d51dff")
.addFields(
        { name: 'Отсканировано:', value: ScanCount + '/44'}, {name: 'Добавлено:', value: NewFoundCount + '/44'},)
.setFooter("Ronoserver Services - Центральное звено", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")

    sentMessage.edit(embedreply)
}

CheckRole('713347634437423144', 'Зерокол')
CheckRole('652810023126433792', 'ЗЕФИИИРКААА!')
CheckRole('669284555316002893', 'АДОЛЬФ')
CheckRole('721418543593291826', 'ОМОН')
CheckRole('663770231595860009', 'Певец')
CheckRole('689192765070114827', 'Маладец! Харашо четает!')
CheckRole('663803133478043649', 'Богач')
CheckRole('647797085973905418', 'Советский человек')
CheckRole('648241606323077150', 'Фанат Ронополдо')
CheckRole('785107473253662750', 'Мне Понравился ник! Это моё мнение а на остальных плэвац')
CheckRole('647569857847754753', 'Корупционер')
CheckRole('682688871825276999', 'Чармандер')
CheckRole('682689218958721277', 'Сквиртл')
CheckRole('682689355684642817', 'Бульбазавр')
CheckRole('647914899816710154', 'ПОБЕДИТЕЛЬ КОНКУРСА!')
CheckRole('709144514471919736', 'Активный член сервера')
CheckRole('647228038236340256', 'Играли со мной)')
CheckRole('790439686007029770', 'Nintendo Switch')
CheckRole('652858569313746966', 'Премиум')
CheckRole('657321902079082506', 'VIP АККАУНТ')
CheckRole('657321902079082506', 'dd')
CheckRole('813376019213975602', 'Мемер года ЫЫЫЫЫЫЫЫ')
CheckRole('809550713742295130', 'Ночная Тварь')
CheckRole('706656933121097749', 'ОТТОРЧАЛ 30 ЧАСОВ НА СТРИМАХ 0_о')
CheckRole('701558179061825646', 'ОТТОРЧАЛ 20 ЧАСОВ НА СТРИМАХ')
CheckRole('681307173976145920', 'Отторчал 10 часов на стриме')
CheckRole('793844059240267786', 'Элита, 1337  по числу участников')
CheckRole('791020169035644988', 'Не знает цифр...')
CheckRole('795024318480384030', 'Респектос от роне')
CheckRole('843426350072070154', 'Respecc от Утки')
CheckRole('848996116674641921', 'Респект от Ондрея')
CheckRole('811813089712013373', 'Респект от Жуиса')
CheckRole('810246373744050246', 'Респект От Лоли Сообщества')
CheckRole('797565586158256128', 'Вампир')
CheckRole('789465749747007518', 'ГОЛОСОВАВШИЙ!')
CheckRole('810545386741039125', 'Игровой чел!')
CheckRole('652581121347026965', 'Секретный ДиДжей')
CheckRole('786566409294970910', 'ДИДЖЕЙ ЕБАН!!!')
CheckRole('794722807484776498', 'Чел который может сидеть в нашей конфе (Рони и Ондрея)')
CheckRole('784000470804332554', 'БОМЖАРА')
CheckRole('812739780546002964', 'Алкаш')
CheckRole('809559103083905076', 'Бабл Квасер')
CheckRole('809559103083905076', 'dd')
CheckRole('795032218241073163', 'СТО ПРОЦ НАСТАЙАЩЯЙА АДМИНКА 100%%%%')
    let embedreply = new Discord.MessageEmbed()
.setTitle("Успешно отсканировано!")
.setColor("#00ff00")
.addFields(
        { name: 'Суммарно было отсканировано:', value: ScanCount + '/44'}, {name: 'Добавлено новых ролей:', value: NewFoundCount + '/44'},)
.setFooter("Ronoserver Services - Центральное звено", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")

    sentMessage.edit(embedreply)

});

}
talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 7200000);
    }
}
module.exports = { parse }