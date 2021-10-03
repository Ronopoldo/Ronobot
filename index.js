
const express = require('express'); //Импорт express.js
const fs = require("fs");
 const talkedRecently = new Set();
const app = express(); //Присваивание константы для app
const port = 3000; //Присваивание константы порта
 app.get('/', (req, res) => res.send('ВАУ БЛЕН  ВСЁ РАБОТАЕТ! АХРЕНЕЕТЬЬ \n PS - консоль немного сдохла, мне лень ее чинить)'));//Уведомление  о нормальном запуске кода

app.listen(port, () => console.log(`Локальный адрес: http://localhost:${port}`)); //Вывод порта



// ================= КОД БОТА ===================
const Discord = require('discord.js'); //Импорт библиотеки Discord.js
alert('1')
let LastHour = 0;
const client = new Discord.Client(); //Присваивание константы Клиента
const guild = client.guilds.cache.get("544902879534907392");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); //После загрузки уведомить об этом в консоль и написать имя пользователя для команд ниже
});


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Пример, как подключать функции из соседних файлов
// const f = require( './src/func' );
// const result = f.add(10, 5);
// console.log( 'The result is:' , result);

var xhr = new XMLHttpRequest();

alert('1')
{

     var d = new Date(); //Получение даты в переменную
}
client.on("ready", () => { //начало действий после полной загрузки бота
alert('1')
console.log(n);
  console.log('тип рабет'); //Проверка работоспособности бота


client.user.setPresence({ status: "idle" }); //установка статуса "Не на месте"
client.user.setActivity('хентай :P', { type: 'WATCHING' }); //Установка статуса "Смотрит"

alert('1')
client.user.setStatus('idle') //установка статуса "Не на месте" (вторая версия, на случай, если 1 не сработает)
  console.log('тип рабет 2')
/////////////



   var interval = setInterval (function () { //Создание интервала проверки времени
        var d = new Date();
        var m = d.getHours();
        // var month = d.getMonth() + 1;
        // var day2 = d.getDay(); //Получение данных с сервера (выше)


      // var now = new Date();
      // var start = new Date(now.getFullYear(), 0, 0);
      // var diff = now - start;
      // var oneDay = 1000 * 60 * 60 * 24;
//       var day = Math.floor(diff / oneDay); //выше (эта + 4 строки выше) - подсчёт нынешнего дня
//       console.log(m+3)
//       if ((m+3)>=24) //Проверка: больше ли GMT+3, чем 24 (разница часовых поясов); день прибавится, если да
//       {
//         day++;
//         console.log('Прибавлен 1 день, из-за часового пояса!')
//       }
//       console.log('День: ' + day); //Вывод дня в лог
// console.log('Час: ' + m); //Вывод часа в лог


//       var Type = "";

//       var Deltalol = 152 - day; // 152 - 1 июня (день от начала года, к которому стремится таймер)
//       var DeltaStr = Deltalol.toString;
//       console.log(DeltaStr);

//       var lol = 'До лета ';
//       var intDay = parseInt(Deltalol); //Получение дней до определенного числа
// let massiv = ["день!", "дня!", "дней!"];
// let dayMap = new Map([
//   [1, massiv[0]],
//   [2 , massiv[1]],
//   [3, massiv[1]],
//   [4, massiv[1]],
//   [5, massiv[2]],
//   [6, massiv[2]],
//   [7, massiv[2]],
//   [8, massiv[2]],
//   [9, massiv[2]],
//   [0, massiv[2]]
// ]);

// var intDayOutput = intDay;

// if (intDay > 20)
// {
// intDayOutput = intDay % 10;
// }
// else if (intDay > 10) {
//   intDayOutput = 0;
// } //выше (до массива) установка верного падежа для слова "День"


// var startDate = new Date('19/04/2021');
//       // if ((m+3)>=24)
//       // {
//       //   startDate++;
//       //   console.log('Прибавлен 1 день, из-за часового пояса!')
//       // }
// var endDate = new Date('01/06/2021');
// var numOfDates = getBusinessDatesCount(startDate,endDate);

// function getBusinessDatesCount(startDate, endDate) {
//     var count = 0;
//     var curDate = startDate;
//     while (curDate <= endDate) {
//         var dayOfWeek = curDate.getDay();
//         if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
//            count++;
//         curDate.setDate(curDate.getDate() + 1);
//     }
//     alert('Лох! Работай еще столько дней:');
//     alert(count)
//     return count;
// }
// alert(numOfDates)
//НЕрабочий код ^^^^^^^

// function DayCount() //ввод БЕЗ аргументов
// {
//    var d2 = new Date(2021,05,01); // Итоговый день
//    var d1 = new Date(2021, d.getMonth(), d.getDate()); //Формат: год, месяц, день (заменить год на нынешний или поставить d.getYear() d - нынешнее число) 

// alert("Щас:" + d1)
// alert("Цель:" + d2)
   
//    var flag=true;
//    var day,daycount=0;
//    while(flag)
//    {
//     day3=d1.getDay();
//     if(day3 != 0 && day3 != 6)  { // если день не суббота и не воскресенье, то прибавляет счётчик дней (итог)
//       daycount++;
// if (m+3>18) //Вычитается день, если время 18 и выше
// {
//   SummarCount--
// }
	   
//     }
//     d1.setDate(d1.getDate()+1) ;
//     if(d1.getDate() == d2.getDate() &&
//       d1.getMonth()== d2.getMonth()) // Если даты совпали, то отключать цикл
//       {
//         flag=false;
//       }
//  }
//  return daycount;
// }
// var SummarCount = DayCount();
//     if ((m+3)>=24) //Если GMT+3 больше 24 (ночи), то вычитается один день из-за разницы часовых поясов
//       {
//         SummarCount--;
      //   console.log('Вычтен 1 день, из-за часового пояса!')
      // } //123, 130 (3 и 10 мая (праздничные дни))


// if (day<123) //Если число ДО майских праздников, то вычитается один день
// {
//   SummarCount--
// }

// if (day<130) //Если число ДО майских праздников, то вычитается один день
// {
//   SummarCount--
// }

// if (day<124) //Если число ДО майских праздников, то вычитается один день
// {
//   SummarCount--
// }
// if (day<125) //Если число ДО майских праздников, то вычитается один день
// {
//   SummarCount--
// }
// if (day<126) //Если число ДО майских праздников, то вычитается один день
// {
//   SummarCount--
// }
// if (day<127) //Если число ДО майских праздников, то вычитается один день
// {
//   SummarCount--
// }
// alert('Лох! Работай еще столько дней: ' + SummarCount); //Вывод в консоль


// console.log(day + ' ' +  dayMap.get(intDayOutput));

//       var Test1 = ['ʀᴏɴᴏᴘᴏʟᴅᴏ'] //      var Test1 = ['ʀᴏɴᴏᴘᴏʟᴅᴏ - До лета ', Deltalol, ' ', dayMap.get(intDayOutput), ' Из них ', SummarCount,' - рабочие']
//       let Test2 = Test1.join(''); //Создание переменной, которая будет выводиться в название сервера
//       console.log(Test2); //Вывод переменной выше
      



// if (m>=22 || m>=0 && m<1) { // Проверка: ночь ли в данный момент
//         console.log("КАПЭС НОЧЬ УЖЕ!");
//         app.get('/', (req, res) => res.send('КАПЭС НОЧЬ УЖЕ!'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Night.gif'); //Установка значка
//         }

//         if (m>=1 && m<8) { // Проверка: утро  ли в данный момент
//         console.log("УТРО! ПАРА ВСТАВАЦ НА");
//         app.get('/', (req, res) => res.send('УТРО! ПАРА ВСТАВАЦ НА'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Morning.gif'); //Установка значка

//         }

//         if (m>=8 && m<15) { // Проверка: день ли в данный момент
//         console.log("КАПЭС!!! ДЕНЬ ЧОРТ ПАБИРИ");
//         app.get('/', (req, res) => res.send('КАПЭС!!! ДЕНЬ ЧОРТ ПАБИРИ'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Day.gif'); //Установка значка
//         }

//                 if (m>=15 && m<22) { // Проверка: вечер ли в данный момент
//         console.log("ЖЭСТЬ ВАЩЭ УЖЭ ВЕЧИР!!!!11!!");
//         app.get('/', (req, res) => res.send('ЖЭСТЬ ВАЩЭ УЖЭ ВЕЧИР!!!!11!!'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Evening.gif'); //Установка значка
//         }
//         const guild = client.guilds.cache.get("544902879534907392"); // Создание константы, хранящей айди сервера
//         // guild.setName(Test2); //Установка (Test2)соответсвующего имени сервера
if (m+3>24)
{
  m = m + 3 - 24
} else {
  m = m+3
}
        const guild = client.guilds.cache.get("544902879534907392");
console.log('m='+m)

//Смена иконки сервера в зависимости от времени (m=час по мск)

console.log('LastHour='+LastHour)
      console.log('Час (МСК): '+ m)
      if (m > 12 && m!=24)
      {
        if (m-12!=LastHour)
        {
          console.log('НОВЫЙ ЧАС! СОБЫТИЕ: СМЕНА ЗНАЧКА');
        mn = m - 12;
        var PartDirection = ['./images/AdvancedIcons/' + mn + 'pm.gif']
        let FullDirection = PartDirection.join('');
        console.log(FullDirection);
        guild.setIcon(FullDirection); //Установка значка
        LastHour=mn;
        }
      }else{
                if (m!=LastHour)
        {
           if (m!=24)
           {
          console.log('НОВЫЙ ЧАС! СОБЫТИЕ: СМЕНА ЗНАЧКА');
        var PartDirection = ['./images/AdvancedIcons/' + m + 'am.gif']
        let FullDirection = PartDirection.join('');
        console.log(FullDirection);
        guild.setIcon(FullDirection); //Установка значка
        LastHour=m;
           }
  
        {
         guild.setIcon('./images/AdvancedIcons/12am.gif'); 
        }
        }
      }
      console.log(LastHour)
        
    }, 30000);  //900000 - интервал в милисекундах между проверками (900 000 = 15 минут)
 
// var interval = setInterval (function () { //Интервал на обновление темы (описания) канала в течении каждых 10 минут
//      let data = fs.readFileSync("./data/CurrentCount", "utf8"); //нужен файл по дериктории ./data/ с названием CurrentCount содержащий ЦЕЛОЕ числовое значение - последнее названное число
//       let needc = client.channels.cache.get('863309558209576960') //анал со счётом
//       var pindate = new Date();
//       var pinhours = pindate.getHours() + 3
//       var pinmonth = pindate.getMonth() + 1
//       if (pinhours > 23) { pinhours = pinhours - 24 }
//       let chtopic = 'Считаем разряды двоичной системы до бесконечности! Последнее число: ' + data + ' (обновляется плохо из-за лимитов дискорда) \nПоследнее обновление: ' + pindate.getDate() + '.0' + pinmonth + '.' + pindate.getFullYear() + ' в ' + pinhours + ':' + pindate.getMinutes() + ':' + pindate.getSeconds()
//       console.log(chtopic)
//       needc.setTopic(chtopic)
// }, 30000); //300000; лимиты дискорда позавляют менять тему (описание) канала не более 2 раз в 10 минут ;-;

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/ping') { //Команда пинга (все команды ниже работают по тому же принципу)



        msg.reply('ПОНГ БЛЯТЬ!'); //Ответ на сообщение ПЕРЕД вычислением пинга
        msg.channel.send(new Date().getTime() - msg.createdTimestamp + " милясякунт пинг нахуй!");  //Вычисление и вывод пинга (зарегистрированное время минус фактическое время)
  }
}); 
client.on('message', msg => {
          if (msg.content === "$loop4") { 
        if (!msg.member.hasPermission("ADMINISTRATOR")) return
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            msg.channel.send("Мда... Верят какому то дауну... Пиздец блять", 1*100)
            .catch(console.error); // add error handling here
        }, 10000); 
    }
  }); 
//https://cdn.discordapp.com/attachments/698853696817070164/796793748573913098/2.mp4
client.on('message', msg => {
  if (msg.content.toLowerCase() === '/lockdown') {



        msg.reply('https://cdn.discordapp.com/attachments/698853696817070164/796793748573913098/2.mp4');
  }
}); 





client.on('message', msg => {
  if (msg.content.toLowerCase() === '/secret') { //Вывод секретной видяшки



        msg.reply('https://cdn.discordapp.com/attachments/698853696817070164/796793748573913098/2.mp4');
  }
}); 

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'пинг') {


        // msg.reply('в пизду пошёл окда?')
        msg.reply('ПОНГ БЛЯТЬ!');
        msg.channel.send(new Date().getTime() - msg.createdTimestamp + " милясякунт пинг нахуй!"); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/пинг') {



        msg.reply('ПОНГ БЛЯТЬ!');
        msg.channel.send(new Date().getTime() - msg.createdTimestamp + " милясякунт пинг нахуй!"); 
  }
});
            
 var n = d.getHours();

client.on('message', function(message) { //Старая команда для запуска интервала по смене значков
          if (message.content === "$ЛОЛЛОЛ") { 
        if (!message.member.hasPermission("ADMINISTRATOR")) return
        var interval = setInterval (function () {


   var d = new Date();
 var m = d.getHours();
if (m>=20 || m>=0 && m<3) {
message.channel.send("КАПЭС НОЧЬ УЖЕ!");
const guild = client.guilds.cache.get("544902879534907392");
guild.setIcon('./Night.gif');
}

if (m>=3 && m<8) {
message.channel.send("УТРО! ПАРА ВСТАВАЦ НА");
const guild = client.guilds.cache.get("544902879534907392");
guild.setIcon('./Morning.gif');
}


if (m>=8 && m<15) {
message.channel.send("КАПЭС!!! ДЕНЬ ЧОРТ ПАБИРИ");
const guild = client.guilds.cache.get("544902879534907392");
guild.setIcon('./Day.gif');
}



            message.channel.send(m, 1*100)


            .catch(console.error); // вывод ошибки
        }, 1000);  //Тут я ничего писать не буду) Всё можно найти в интервале выше
    }
});

// var d = new Date();
// var n = d.getHours();
// var m = d.getMinutes();


// while (m==29) {
  
// while (n<24) {

//   console.log('123');
// }
// }
// client.on('message', msg => {
//                   if(msg.member.roles.cache.has("828667331286794291")) {
//   if (msg.content.toLowerCase() === "а") {
// });



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {



        msg.reply('ПОНГ!');
                msg.channel.send(new Date().getTime() - msg.createdTimestamp + " милясякунт пинг!"); 
  }
});


client.on('message', msg => {
 if (msg.content.toLowerCase() === '/rules') //В ковычках то, на что он будет реагировать
  {
const Rules = new Discord.MessageEmbed()
.setTitle("Правила")
.setAuthor("Ronopoldo", "https://media.discordapp.net/attachments/768414683019345931/841699325188767795/Logotip_v3.png", "https://youtube.com/Ronopoldo")
.setColor("#ff8800")
.setDescription("Здравствуйте! Я - официальный бот Ronopoldo, написанный им самим же) Моей работой заключается техническое обслуживание сервера, а также я меняю значок и название сервера в зависимости от времени суток)\nЧуть ниже вы сможете увидеть правила; прочтите и запомните их:")
.addFields(
        { name: '1. Не оскорблять других пользователей', value: 'Вести себя уважительно к другим пользователям (мат разрешен не в оскорбительном контексте кроме NSFW каналов), также на сервере ЕСТЬ мат, но в умеренных количествах; соглашаясь с правилами вы осознаете, что готовы видеть мат и нецензурную брань.' }, {name: '2. Не флудить и использовать каналы по назначению', value: 'Не флудить и не спамить, а также использовать каналы по назначению. Предупреждаю сразу же, что спам участникам сервера в личку будет караться также, как и при спаме в каналы.'}, {name: '3. Не рекламировать что либо кроме канала рекламы', value: 'Любого рода реклама для пиара ЗАПРЕЩЕНА! Вместо этого вы можете использовать канал <#647128722083807240>. За спам в личные сообщения также будем наказывать.'}, {name: '4.  Не говорить о спорных темах', value: 'Например: религии, политике и тд'}, {name: '5. Не пинговать пользователей, если они просят не делать этого', value: 'Не пингуйте тех, кто против этого; также не просите добавления в друзья у меня!'}, {name: '6. Не раскрывать чью-либо личную информацию', value: 'Не делится чьей-либо конфиденциальной информацией без их личного разрешения.'}, {name: '7. Не обходить правила и фильтры ДС', value: 'Нельзя как либо обходить правила и фильтры.'}, {name: '8. Не пингуйте мне по пустякам', value: 'Тут я на самом деле чаще всего буду вас просто игнорировать.'}, {name: '9. Слушаться работников сервера', value: 'Слушаться стафф команду сервера: если они говорят, что вы делаете что-то не так; просто не делайте этого.'}, {name: '10. Не взламывать данный сервер', value: 'Лол) Ну попробуйте))0 Наказать тут уже вряд ли сможем//'}
)
.setFooter("Ronoserver Services message provided by Ronopoldo", "https://media.discordapp.net/attachments/768414683019345931/841699625996255232/Sheriff_ava_3.png")
.setImage("https://i.pinimg.com/originals/e3/8f/72/e38f7224c6c0e12bfcec214af84e8151.png")
.setThumbnail("https://media.discordapp.net/attachments/768414683019345931/841699796481605632/ds_ava_1.png")

    const warn = new Discord.MessageEmbed()
.setTitle("Меры наказания")
.setColor("#8b0000")
.setDescription("За невыполнения правил, модерация может наказать вас одним из существующих видов наказания, однако, наиболее популярным является выдача варна - временного предупреждения. Если вы получите одно такое предупреждение, то ничего не будет и он пропадёт по истечерию срока, который назначит модератор; однако, если вы соберёте несколько варнов, то рискуете получить наказание. Ниже представлен список как раз-таки этих наканазний:\n\n**3предупреждения** - мут на 3 дня\n**6 предупреждений** - мут на 14 дней\n**8 предупреждений** - кик с сервера\n**10 предупреждений** - закрытие в психиатрической больнице сервера (выйти можно только за выкуп)\n**14 предупреждений** - бан на 24 дня\n**16 предупреждений** - можизненный бан\n\nСтарайтесь не нарушать правила и варны для вас будут не страшны ^^")

.setFooter("Ronoserver Services for Ronoserver - 2020", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://i.pinimg.com/originals/c9/35/a8/c935a89c1f710aafcfac88454ade600c.png")


  msg.channel.send(Rules)
    msg.channel.send(warn)
  }
});

// client.on('message', msg => {
//   if (msg.content.startsWith('/ae')) {
// if(('803071318768746547')){
//   msg.reply("DIE")

// }
//         //Rest of your code
    
//     // const args = msg.content.slice(`/ae`).split(/ +/);
//     // msg.reply(args[args[1]]);
// }
// });

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/seeya') { //Embed сообщение про переезд


    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Вы находитесь на старом сервере!')
	.setURL('https://discord.gg/vw6GJCm')
	.setAuthor('Ronoserver services.', 'https://cdn.probot.io/ht0KnrUehX.png', 'https://youtube.com/Ronopoldo')
	.setThumbnail('https://cdn.probot.io/7jmN0TqfM2.png')
	.addFields(
		{ name: 'Мы переехали!', value: 'Хей! Сервер на котором вы находитесь неактивен с 9.12.2020 и более чем для просмотра истории каналов он не для чего не нужен! \n Просьба, присоединится на новый активный сервер перейдя по ссылке ниже.' },
	  { name: "We've moved!", value: 'Hey! This server is inactive since 12/9/2020 and it is not needed for anything more than viewing the channel history! \n Please, join the new working server by clicking on the link below.' },
	)
	.setFooter('Спасибо всем, кто как либо участвовал в жизни этого сервера! Мы его никогда не забудем...', 'https://cdn.probot.io/23L7NdK2Uq.png');

    msg.reply(exampleEmbed)
    msg.channel.send('https://discord.gg/vw6GJCm') //Отправка приглашения
  } 
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/nabor6') { //Embed сообщение про набор


    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#9013FE')
	.setTitle('ШЕСТОЙ НАБОР В АДМИНИСТРАЦИЮ СЕРВЕРА')
	.setAuthor('Ronoserver Services (for Ronoserver)', 'https://cdn.probot.io/ht0KnrUehX.png')
  .setImage('https://media.discordapp.net/attachments/698853696817070164/862871810029649990/0b87113063aceb69.png?width=1440&height=610')
	.setThumbnail('https://probot.media/6NLtslrqWt.png')
  .setDescription('Хей! По Вашим просьбам, делаю шестой набор на работников сервера)\nДобро пожаловать на 6-ой по счёту набор в администрацию/модерацию сервера.\nНабор будет проходить по стандартным правилам, с которыми вы ознакомитесь чуть ниже.\nВсё максимально просто: если Вы - тот, кто желает избираться, то Вы должны убедится что подходите требованиям:\n- У вас должен быть актив на удовлетворительном уровне\n- Вы готовы уделять время Роносерверу\n- Вы соблюдаете правила\n- У вас есть хорошее отношение с коммьюнити сервера\n- Вы готовы быть админом\n\nНа этом вроде всё :3\n\nЕсли вы соответствуете данным требованиям, то спокойно прописывайте команду /админ или /модер (в зависимости на что вы собираетесь претендовать; к администрации требования выше применяются намного жёсче, нежели к модерации); после успешного применения команды я должен буду отправить Вам потверждающее сообщение! Если всё хорошо, то ждите итогов голосования!\n\nТакже, те, кто будет спамить командами автоматически будет отстранён от наборов\n\nВроде бы на этом всё! Если вы собираетесь участвовать в наборе, то желаю вам удачи ;) Результаты будут известны на днях\nЕще увидимся, будущие сотрудники Роносервера\nИскренне\nRonopoldo\nRonoserver Services')
	.setFooter('Ronoserver Services message provided by Ronopoldo#2020', 'https://probot.media/5T6WaVw0jo.png');

    msg.channel.send(exampleEmbed1)
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/nabor') { //Embed сообщение про набор


    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#9013FE')
	.setTitle('ПЯТЫЙ НАБОР В АДМИНИСТРАЦИЮ СЕРВЕРА')
	.setAuthor('Ronoserver Services (for Ronoserver)', 'https://cdn.probot.io/ht0KnrUehX.png')
  .setImage('https://probot.media/FqnirRFWDF.png')
	.setThumbnail('https://probot.media/6NLtslrqWt.png')
  .setDescription('Хей! Всем привет!\nДобро пожаловать на 5-ый по счёту набор в администрацию/модерацию сервера.\nНабор будет проходить по стандартным правилам, с которыми вы ознакомитесь чуть ниже.\nВсё максимально просто: если вы тот, кто желает избираться, то вы должны убедится что подходите требованиям:\n- У вас должен быть актив на удовлетворительном уровне\n- Вы готовы уделять время Роносерверу\n- Вы соблюдаете правила\n- У вас есть хорошее отношение с коммьюнити сервера\n- Вы готовы быть админом\n\nНа этом вроде всё :3\n\nЕсли вы соответствуете данным требованиям, то спокойно прописывайте команду /administrator или /moderator (в зависимости на что вы собираетесь претендовать; к администрации требования выше применяются намного жёсче, нежели к модерации) и ждите итогов голосования!\n\nТакже, те, кто будет спамить командами автоматически будет отстранён от наборов\n\nВроде бы на этом всё! Если вы собираетесь участвовать в наборе, то желаю вам удачи ;) Результаты будут известны на днях\nЕще увидимся, будущие сотрудники Роносервера\nИскренне\nRonopoldo\nRonoserver Services')
	.setFooter('Ronoserver Services message provided by Ronopoldo#0185', 'https://probot.media/5T6WaVw0jo.png');

    msg.reply(exampleEmbed1)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '/лето') {  //Embed сообщение про лето


    const exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#cc00ff')
	.setTitle('**Переход на летнее время!**')
  	.setURL('https://www.pinterest.ru/pin/941041284607455638/')
	.setAuthor('Ronoserver Services (for Ronoserver)', 'https://cdn.probot.io/ht0KnrUehX.png')
  .setImage('https://i.pinimg.com/originals/3a/03/cb/3a03cbb107af0da77dc4c9c9038544d7.png')
	.setThumbnail('https://i.pinimg.com/originals/13/e9/be/13e9befce82ede51c4a82e98f8cdb7e3.png')
  .setDescription('С 21 марта 2021 года Роносервер переходит на летнее время! \nОднако, в отличии от того, чтобы сдвинуть время вперед, время сдвигается НАЗАД.\nТеперь вы можете определять время суток по данным временным меткам:\n**Ночь: 1:00 – 4:00**\n**Утро: 4:00 – 11:00**\n**День: 11:00 – 18:00**\n**Вечер: 18:00 – 1:00**\n\nИспользуется МОСКОВСКОЕ время (gmt +3)\n\nДанное изменение повлияет на время, когда будет меняться иконка сервера и некоторые другие функции. Данное изменение будет действовать до 21 сентября 2021 года или до нового обновления!\n\nНадеемся, что изменения особо не навредят вам) \nПоздравляю всех с началом летнего счёта времени ^^\nИскренне,\nRonoserver Services')
	.setFooter('Ronoserver Services message provided by Ronopoldo#0185', 'https://probot.media/5T6WaVw0jo.png');

    msg.reply(exampleEmbed1)
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === '/летоначалось') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const exampleEmbed5 = new Discord.MessageEmbed()
.setTitle("**__ЛЕТО__**")
.setAuthor("Ronoserver Services", "https://images-ext-1.discordapp.net/external/sPU82I_kope1D0xI26HVnvxMUqiMUvXiS6RCqz5U6iI/https/cdn.probot.io/ht0KnrUehX.png","https://youtube.com/ronopoldo")
.setColor("#ffee00")
.setDescription("Всех искренне поздравляем с началом лета!\nОчень надеемся, что оно будет таким же крутым, как и в прошлом году, а может, даже лучше)\nМы все очень рады тому, что теперь все смогут отдохнуть от трудных 9 месяцев учёбы)\nРоносервер не меняется и продолжает работать в том же режиме, в котором он работал и в учебное время.\n\n\nОчень надеемся, что за лето вы вдоволь наиграетесь, нагуляетесь и начилитесь) Для кого то следующий год будет трудным и важным, поэтому это будет просто необходимо.\n\n\nБудем надеятся увидеть Вас летом на нашем сервере! Заходите, мы всегда Вам рады! Помните, Роносервер всегда готов поддержать Вас!\nЧто же... Вот и началась летняя пора! 1 ИЮНЯ! От лица Ronoserver Services я желаю Вам всем отличного отдыха\nИскренне\n-Ronopoldo")

.setFooter("Всем счастливого отдыха!", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setImage("https://i.pinimg.com/originals/9e/f7/8a/9ef78a4b75ea6af8da2c391cea5b686b.png")

.setThumbnail("https://i.pinimg.com/originals/eb/f9/53/ebf953793ae2266726a2fc32893e9b12.png")

    msg.channel.send(exampleEmbed5)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '/переезд') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const exampleEmbed4 = new Discord.MessageEmbed()
.setTitle("Третий переезд")
.setAuthor("Ronoserver Services", "https://images-ext-1.discordapp.net/external/sPU82I_kope1D0xI26HVnvxMUqiMUvXiS6RCqz5U6iI/https/cdn.probot.io/ht0KnrUehX.png","https://youtube.com/ronopoldo")
.setColor("#ffee00")
.setDescription("Всем привет, с вами Ronoserver Services... И, сегодня, мы вынуждены сказать одну важную для сервера новость... Возможно, для кого-то она прозвучит, как хорошая; а для кого-то как плохая... \n Начиная с субботы мы постепенно начинаем возвращаться на Звезду... Да, всё верно, вы не ослышались; мы вновь переезжаем на сервер Звезду, и для этого есть причины... Приношу огромные извенения за эти чёртовы неудобства... Будет ли это нашим последним переездом? Я не знаю... Да и никто не знает... \n Недавно, через голосование вы решили, что серверу нужно сделать обновление, улучшить его, и, осознав, насколько это будет трудно сделать с этим сырым сервером, который не трогали с 2019 года, я сделал вывод... Возврат на звезду... \n Да, для кого то это прозвучит странно, так как мы лишь недавно вернулись на этот сервер, однако, на звезде у нас было всё, чего нам не хватает сейчас! Звезда была совершенным сервером с более новыми технологиями, нежели на этом...\n Для кого то эта новость будет шоком, а кто-то примет её нормально, однако, это так... \n \n А сейчас небольшая информация про переезд.\n Во-первых, стоит отметить, что переезд не будет резким! Начнётся он в субботу, 3 апреля, и закончится лишь к началу мая; то есть, до мая вы сможете пользоваться как этим, так и тем серверами. Это я называю период адаптации.\n Однако, в любом случае, я рекомендую перейти на Звезду как можно скорее, чтобы возникало потом меньше проблем...\n\n Также, естественно, я бы не стал переезжать на сервер без переноса данных)\n **Почти все ваши данные будут сохранены и перенесены на Звезду!** \n\n Вот список того, что перенесётся на Звезду:\n Уровень (ранг)\n Ваш баланс и предметы в инвентаре \n И, самое главное, вам вернуться все редкие роли и роли за ивенты; их список будет предоставлен на Звезде в течении каникул (03.04-11.04). Для их восстановления вам понадобится иметь свой аккаунт на этом сервере, поэтому, просьба, раньше времени не покидать этот сервер.")

.setFooter("Прошу, не злитесь на меня... Искренне, Ronopoldo", "https://probot.media/5T6WaVw0jo.png")
.setImage("https://i.pinimg.com/originals/ee/a5/c9/eea5c918597c1a07cc7984377cb5a4f3.png")
	.addFields(
		{ name: 'Спасибо большое!', value: '\n\n\n\nРебята, огромное вам спасибо, что были, хоть и короткий промежуток времени, но на этом сервере... Прошу, не злиться на меня за  очередной переезд, даже, если вам и нравился этот роносервер... Поверьте, он останется в моём, и многих других сердцах надолго... Здесь мы встретили новый 2021 год, что очень неплохо для такой короткой жизни.... Ещё раз... Простите меня...\nЯ очень надеюсь, что вы не будете меня ненавидить за это сильное решение... Поверьте, к нему я шёл очень долго, однако, я счёл, что оно будет наиболее рациональным...\n\nМы никогда не забудем Роносервер... Спасибо, что стали частью его истории...\nИскренне\nRonopoldo, Ronoserver Services' }

	)
.setThumbnail("https://images-ext-2.discordapp.net/external/uOEi-1t9BBDJFTaoiqFZSB_7_YeZPG2jGgbFnwVbE0U/https/cdn.probot.io/7jmN0TqfM2.png?width=760&height=677")

    msg.reply(exampleEmbed4)
      msg.channel.send('https://discord.gg/B5HgSxtp')
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '/ошибка') {


    const warn1 = new Discord.MessageEmbed()
.setTitle("Меры наказания")
.setColor("#8b0000")
.setDescription("За невыполнения правил, модерация может наказать вас одним из существующих видов наказания, однако, наиболее популярным является выдача варна - временного предупреждения. Если вы получите одно такое предупреждение, то ничего не будет и он пропадёт по истечерию срока, который назначит модератор; однако, если вы соберёте несколько варнов, то рискуете получить наказание. Ниже представлен список как раз-таки этих наканазний:\n\n**3 предупреждения** - мут на 3 дня\n**6 предупреждений** - мут на 14 дней\n**8 предупреждений** - кик с сервера\n**10 предупреждений** - закрытие в психиатрической больнице сервера (выйти можно только за выкуп)\n**14 предупреждений** - бан на 24 дня\n**16 предупреждений** - пожизненный бан\n\nСтарайтесь не нарушать правила и варны для вас будут не страшны ^^")

.setFooter("Ronoserver Services for Ronoserver - 2020", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://i.pinimg.com/originals/c9/35/a8/c935a89c1f710aafcfac88454ade600c.png")

  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/зеленский') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const Zelensky = new Discord.MessageEmbed()
.setTitle("Получить роль для общения с Зеленским")
.setColor("#3797d7")
.setDescription("Если вы желаете, чтобы на некоторые ваши сообщения отвечал бот <@155149108183695360>, то можете включить реакцию ниже. Однако, вам стоит знать, что бот **БУДЕТ ВАС ОСКОРБЛЯТЬ**! Если вы не желаете видеть оскорбления в свой адрес, то не ставьте реакцию ниже.\n**ВАЖНО** - из-за ограничений на бота, введённых в апреле 2021 года, бот больше **НЕ РАЗВИВАЕТСЯ**. Это означает, что бот больше не сможет расширять свою базу данных в плане ответов и новых команд; всё,что он накопил до ограничений будет работать в стандартном режиме.")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://media.discordapp.net/attachments/698853696817070164/829711422115545109/DynoBot.png")

    msg.channel.send(Zelensky)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '/история') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const history = new Discord.MessageEmbed()
.setTitle("Получить роль для просмотра Истории")
.setColor("#ead946")
.setDescription("Хей! Если вы являетесь олдом или просто хотите посмотреть закрытые каналы, то можете нажать реакцию ниже и получить роль для просмотра старых каналов.")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://media.discordapp.net/attachments/768414683019345931/841705746857197628/hourglass-clipart-hour-18.png?width=669&height=669")

    msg.channel.send(history)
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === '/новости') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const news = new Discord.MessageEmbed()
.setTitle("Оформить Новостную подписку")
.setColor("#ffcc01")
.setDescription("Хей! Если Вы желаете получать пинги о важных новостях, то Вы можете оформить Новостную Подписку!")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://i.pinimg.com/originals/8a/23/d1/8a23d170a00ac79e6ed670986bb54868.png")

    msg.channel.send(news)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === '/cc1') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const cc1 = new Discord.MessageEmbed()
.setTitle("Получить роль дополнительных каналов информации")
.setColor("#d51dff")
.setDescription("Если вы хотите иметь доступ к большему количеству каналов, таких, как \n<#703395583871942706>\n<#695689401350488196>\n<#698954192169074768>\nто вы можете нажать на реакцию ниже.")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://i.pinimg.com/originals/d1/96/bd/d196bdeabe2f67b0fb41205e86ee35b8.png")

    msg.channel.send(cc1)
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '/cc2') { //Embed сообщение про третий переезд (шутка на 1 апреля)


    const cc2 = new Discord.MessageEmbed()
.setTitle("Получить роль дополнительных каналов общения")
.setColor("#ff0000")
.setDescription("Если вы хотите иметь доступ к большему количеству каналов, таких, как \n<#682656810653581359>\n<#664559620207017996>\n<#649003708948021268>\n<#671026327016701953>\n<#647052231400620032>\n<#665540249329467408>\n<#665540249329467408>\nто вы можете нажать на реакцию ниже.")

.setFooter("Ronoserver Services - нажмите реакцию ниже, чтобы выдать/убрать соответствующую роль", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
.setThumbnail("https://i.pinimg.com/originals/db/49/6f/db496f1f678eca9d5b5d139516f3f956.png")

    msg.channel.send(cc2)
  }
});

client.on('message',msg =>
{
     {
       if (msg.content === '/шоу')
       {
      const show = new Discord.MessageEmbed()
.setTitle("Шоу Талантов")
.setAuthor("Ronopoldo", "https://media.discordapp.net/attachments/698853696817070164/859960840102739988/2.png?width=670&height=670","https://youtube.com/Ronopoldo")
.setColor('#dc143c')
.setDescription("Вот и долгожданное шоу тут как тут!! \nПриветствую Вас на шоу талантов, которое пройдёт в пятницу, 23 июля 2021 года, ориентировочно в 15:00 по МСК (точное время скажу ближе к сути)\nТе, кто хочет, может посмотреть, как будут выступать участники, нуу... А если Вы сами хотите поучаствовать, то тогда эти правила для Вас:\n1. Выступление должно длиться не более 5 минут\n2. Вы сами отвечаете за организацию выступления\n 3. Без откровенного и запрещённого контента \n4. Разрешены коллабы из 2-х и более человек\n 5. Без глупостей\n\n Правила могут дополняться, следовательно, при дополнении Вы должны будете соблюдать их тоже.\n Насчёт приза пока неизвестно, возможно, он будет, а возможно нет. \n На этом всё! Сохраняем всё в секрете, поэтому для участия Вам надо прописать одну простую команду: `/шоуталантов` и тогда Вы уже будете с нами\nНа этом всё\nЖдите дополнительных постов позже\nИскренне\nРони")
.setFooter("Сообщение предоставлено Ronopoldo#2020 - 18 июля 2021 года 20:40:10 МСК", 'https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png')
.setImage("https://media.discordapp.net/attachments/698853696817070164/866373487089418270/0f7c225401f603a9.png")
msg.channel.send(show)
     }
     }
});

client.on('message', msg =>
{
  if (msg.content.toLowerCase() === '/шоуталантов')
  {
    let testRole = msg.guild.roles.cache.find(role => role.id == "866536300958056498")
        msg.member.roles.add(testRole)
        msg.channel.send('✅Заявка на участие прошла✅')
  }
})
client.on('message', msg => {
  if (msg.content.toLowerCase() === '/админ') { //Embed сообщение про третий переезд (шутка на 1 апреля)
    let usid = msg.member.id;
    let msgurl = msg.url;
    let temporaly = ['__**<@', usid,'>**__ - роль администратора\n Сообщение:', msgurl];
    let Output = temporaly.join('');
  client.channels.cache.get('650732750294351883').send(Output)

  msg.reply('✅ Всё прошло! ✅')
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/emos') { //Embed сообщение про третий переезд (шутка на 1 апреля)
msg.channel.send('<a:PolarBearWalkin:885982963785949235><:dafaq:885984565607432232>')

  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '/модер') { //Embed сообщение про третий переезд (шутка на 1 апреля)
    let usid = msg.member.id;
    let msgurl = msg.url;
    let temporaly = ['__**<@', usid,'>**__ - роль модератора\n Сообщение:', msgurl];
    let Output = temporaly.join('');
  client.channels.cache.get('650732750294351883').send(Output)

  msg.reply('✅ Всё прошло! ✅')
  }
});



client.on('message', msg => {
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
});



client.on('messageUpdate', (oldMessage, newMessage) => 
  {
     if (oldMessage.channel.id === '863309558209576960') // айди анала со счётом
    {
      if (!oldMessage.author) return;
       let data = fs.readFileSync("./data/CurrentCount", "utf8"); //нужен файл по дериктории ./data/ с названием CurrentCount содержащий ЦЕЛОЕ числовое значение - последнее названное число
       console.log(oldMessage.content)
        let neededmsgid = fs.readFileSync("./data/CountMSGID", "utf8");
       if ((oldMessage.content.startsWith(data))  && (oldMessage.id === neededmsgid))
         {
          newMessage.delete();
          newMessage.channel.send('<@' + newMessage.member.id + '>: **' + data + '**')
         }
    }
  }
);


client.on("messageDelete", (messageDelete) => 
  {
      let neededmsgid = fs.readFileSync("./data/CountMSGID", "utf8");
      if ((messageDelete.channel.id === '863309558209576960') && messageDelete.id === neededmsgid) // айди анала со счётом
      {
        let data = fs.readFileSync("./data/CurrentCount", "utf8"); //нужен файл по дериктории ./data/ с названием CurrentCount содержащий ЦЕЛОЕ числовое значение - последнее названное число
        console.log(messageDelete.content)
   
        if (messageDelete.content.startsWith(data))
          {
           messageDelete.channel.send('<@' + messageDelete.member.id + '>: **' + data + '**')
          }
      }
  }
);
///////////////////

client.user.setPresence({ activity: { name: '"Симулятор Хентая"'}, status: 'idle', type: 'WATCHING' }) //повтор команды из начала я хз зачем лол, но удалять боюсь
  .then(console.log) //Вывод в логи аутпута
  .catch(console.error); //Вывод ошибки(если есть)
  console.log('тип рабет 2') //Сообщение о работспособности бота (второе)
});







//РАБОТА С БАЗОЙ ДАННЫХ
client.on('message', msg => {
  if (msg.content.toLowerCase() === '/скан')     if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Хей! Команду можно использовать лишь раз в 2 часа! Пожалуйста, подожди ещё немного :3");
    } else {{
    let filepath = ["./data/UserData/" + msg.author.id + '/roles'];
    console.log(filepath)

    let stringpath = filepath.join('').toString();
    let activetemp = false
        alert(stringpath.toString() instanceof String);


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
    
    
    });  









  client.on('message', msg => {
  if (msg.content.toLowerCase() === '/трансфер')
  {



        


    try{
          let FileData = fs.readFileSync('./data/UserData1/' + msg.author.id, "utf8");
      let newpath = './data/UserData/' + msg.author.id;


        if (!fs.existsSync(newpath + '/roles')) {
    fs.mkdir(newpath, err => {})
    fs.writeFile(newpath + '/roles', '', err => {});
    fs.appendFile(newpath + '/roles', FileData, err => {})
    msg.reply('Данные успешно перенесены! Проверь их при помощи /био :3')
        }else{
          msg.reply('Хей! Данные уже перенесены! Если ты хочешь добавить новые роли, то пропиши /скан :)')
        }


    }catch(err){
      msg.reply('Хей! Видимо по всему, ты ещё ни разу ни оцифровывался. Эта команда не для тебя! Пропиши /скан и всё :) Если ты считаешь, что произошла ошибка, то напиши <@544902183007813652>')
         }
  }
  });

////////////
client.on('message', msg =>
{
  if (msg.content.toLowerCase().startsWith('/set roblox'))
  {
        const args = msg.content.slice(`/био`).split(/ +/);
   SentUsername = args[2]
  
  try{
  let httprequest = 'https://api.roblox.com/users/get-by-username?username=' + SentUsername;

xhr.open('GET', httprequest, true);

xhr.send(); // (1)

xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;


  if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    alert(xhr.responseText);
  }
  var data=xhr.responseText;
var jsonResponse = JSON.parse(data); 
let requestID = jsonResponse["Id"]

if (typeof requestID !== 'undefined') 
{
  msg.reply("Пользователь " + jsonResponse["Username"] + " найден! Его ID равен: " + requestID)



  let robloxpath = './data/UserData/' + msg.author.id;
        if (!fs.existsSync(robloxpath)) {
    fs.mkdir(robloxpath, err => {})
        }

            fs.writeFile(robloxpath + '/roblox', requestID + '|' + SentUsername, err => {});
            console.log('Данные внесены!')
    msg.reply('Данные успешно внесены!')
}else{
    var data=xhr.responseText;
var jsonResponse = JSON.parse(data); 
  msg.reply('Произошла ошибка! Пользователь не найден!\nКод ошибки: ' + jsonResponse["errorMessage"])
}
// console.log(JSON) 
  }
  }catch(err) {
    msg.reply('Скорее всего, ты ввёл недопустимые знаки!\nКод ошибки: ' + err)
  }
}})




client.on('message', msg =>
{
  try{
    if (msg.content.toLowerCase().startsWith('/set colour'))
      {
      
      const args = msg.content.slice(`/био`).split(/ +/);
      Color = args[2]
      let colorPath = './data/UserData/' + msg.author.id;
      let counter = 0
      let active = true
      let failed1 = false
      let failed2 = false
      let DetailedColor = Color.split('');
      if ((DetailedColor.length == 6) || (DetailedColor.length == 7))
        {
            DetailedColor[counter] = DetailedColor[counter].toLowerCase() 
            if ((DetailedColor[counter] == '1') || (DetailedColor[counter] == '2') || (DetailedColor[counter] == '3') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '4') || (DetailedColor[counter] == '5') || (DetailedColor[counter] == '6') || (DetailedColor[counter] == '7') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '8') || (DetailedColor[counter] == '9') || (DetailedColor[counter] == 'a') || (DetailedColor[counter] == 'b') || (DetailedColor[counter] == 'c') || (DetailedColor[counter] == 'd') || (DetailedColor[counter] == 'e') || (DetailedColor[counter] == 'f') || (DetailedColor[counter] == '#') || (DetailedColor[counter] == '0'))
            {
              console.log(DetailedColor[counter] + ' Прошло! ПЕРВИЧНЫЙ ТЕСТ')
            }else
            {
              failed1 = true
              active = false
            }
            
          while (active == true)
          {
            counter = counter + 1
            DetailedColor[counter] = DetailedColor[counter].toLowerCase() 
            console.log('VVVV Начат цикл ' + counter + ' | Длина ' + DetailedColor.length + ' | символ ' + DetailedColor[counter])

            if (counter == DetailedColor.length - 1)
            {
              console.log('Бля! Страшно! Вырубаем')
              active = false
            }
            if ((DetailedColor[counter] == '1') || (DetailedColor[counter] == '2') || (DetailedColor[counter] == '3') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '4') || (DetailedColor[counter] == '5') || (DetailedColor[counter] == '6') || (DetailedColor[counter] == '7') || (DetailedColor[counter] == '1') || (DetailedColor[counter] == '8') || (DetailedColor[counter] == '9') || (DetailedColor[counter] == 'a') || (DetailedColor[counter] == 'b') || (DetailedColor[counter] == 'c') || (DetailedColor[counter] == 'd') || (DetailedColor[counter] == 'e') || (DetailedColor[counter] == 'f') || (DetailedColor[counter] == '0'))
            {
              console.log(DetailedColor[counter] + ' Прошло!')
            }else
            {
              console.log(DetailedColor[counter] + ' НЕ ПРОШЛО!')
              failed2 = true
              active = false
            }
            console.log('После теста выше значиние провала равно ' + failed2 + ', значение цикла ' + active + ',а длина массива ' + DetailedColor.length)
            console.log()
          }
        }else {
          console.log('Пидор! Норм длину вводи, а не ' + DetailedColor.length)
          failed1 = true
          failed2 = true
        }
        console.log(failed1 + '<- 1 | 2 ->' + failed2)
        if ((failed1 == false) && (failed2 == false))
        {
          if (!fs.existsSync(colorPath)) 
          {
            fs.mkdir(colorPath, err => {})
          }
          if (DetailedColor.length == 6)
          {
            Color = '#' + Color
          }
          fs.writeFile(colorPath + '/color', Color, err => {});
          console.log('Данные внесены!')
          msg.reply('Хей! Данные успешно внесены! Цветовой код рамки: ' + Color)
        }else{
          msg.reply('Хей! Похоже, что ты ввёл код неправильно. Необходимо ввести код в формате HEX. Например, #ff19a4')
        }
      }
    }catch(err){
      msg.reply('Прости! Что-то сломалось :( Напиши на GitHub бота об ошибке, пожалуйста и укажи данный код: ' + err)//Ондрей блять что ты там делаешь сука?
    }
});

//////




    //////////////ЦИФРОВОЙ ПАСПОРТ
let pingedUser = ''

client.on('message', msg => {
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
let RobloxName = "Не привязан"
 let ROLES = 'Не привязаны'
 let RobloxName1 = 'ERROR'
 let RobloxLink = 'NULL'
 let RobloxId = ''
 alert(pingedUser)
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


let UserName = myUser.tag
// let pname = client.guilds.cache(544902879534907392).members.fetch(pingedUser).username
// console.log(pname)
       let embedreply = new Discord.MessageEmbed()
.setColor(COLOR)
.setAuthor(UserName, authorImage , authorLink)
.setThumbnail(DiscordAvatar)
.addFields(
        { name: 'Roblox профиль: ' + RobloxName + ' (' + RobloxId +')', value: RobloxLink}, {name: 'Оцифрованные роли:', value: ROLES},)
.setFooter("Ronoserver Services - Центральное звено", "https://media.discordapp.net/attachments/768414683019345931/841704850139906108/9b6a4cc843e31c1e.png")
msg.channel.send(embedreply)},
error => {msg.reply('Хей! Произошла попытка при попытке получения польователя >_<\n Проверь, правильно ли ты напиасо его айди.\nКод ошибки: ' + error)})
}catch(err){msg.reply(err)}}catch(err) {
  msg.reply('Не удалось найти данные о пользователе. Вероятнее всего произошло что-то из следующего:\n1) Формат пользователя введён неправильно. Введите ID пользователя или упомяните его. Если Вы хотите посмотреть свой паспорт, то пропишите /био без каких-либо аргументов\n2) Пользователь ещё не выполнял цифравизацию ролей.\nКод ошибки: ' + err)};



}catch(err) {
  msg.reply('Не удалось найти данные о пользователе. Вероятнее всего произошло что-то из следующего:\n1) Формат пользователя введён неправильно. Введите ID пользователя или упомяните его. Если Вы хотите посмотреть свой паспорт, то пропишите /био без каких-либо аргументов\n2) Пользователь ещё не выполнял цифравизацию ролей.\nКод ошибки: ' + err)}
}})
client.login(process.env.DISCORD_TOKEN); //Получение переменной содержащей токен (засекречена)
