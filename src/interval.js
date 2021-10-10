function set(client) {
  var interval = setInterval (function () { //Создание интервала проверки времени
        let LastHour = 0;
        var nowDate = new Date();
        var hoursCount = nowDate.getHours();
        // var month = nowDate.getMonth() + 1;
        // var day2 = nowDate.getDay(); //Получение данных с сервера (выше)


      // var now = new Date();
      // var start = new Date(now.getFullYear(), 0, 0);
      // var diff = now - start;
      // var oneDay = 1000 * 60 * 60 * 24;
//       var day = Math.floor(diff / oneDay); //выше (эта + 4 строки выше) - подсчёт нынешнего дня
//       console.log(hoursCount+3)
//       if ((hoursCount+3)>=24) //Проверка: больше ли GMT+3, чем 24 (разница часовых поясов); день прибавится, если да
//       {
//         day++;
//         console.log('Прибавлен 1 день, из-за часового пояса!')
//       }
//       console.log('День: ' + day); //Вывод дня в лог
// console.log('Час: ' + hoursCount); //Вывод часа в лог


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
//       // if ((hoursCount+3)>=24)
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
//    var d1 = new Date(2021, nowDate.getMonth(), nowDate.getDate()); //Формат: год, месяц, день (заменить год на нынешний или поставить nowDate.getYear() nowDate - нынешнее число) 

// alert("Щас:" + d1)
// alert("Цель:" + d2)
   
//    var flag=true;
//    var day,daycount=0;
//    while(flag)
//    {
//     day3=d1.getDay();
//     if(day3 != 0 && day3 != 6)  { // если день не суббота и не воскресенье, то прибавляет счётчик дней (итог)
//       daycount++;
// if (hoursCount+3>18) //Вычитается день, если время 18 и выше
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
//     if ((hoursCount+3)>=24) //Если GMT+3 больше 24 (ночи), то вычитается один день из-за разницы часовых поясов
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
      



// if (hoursCount>=22 || hoursCount>=0 && hoursCount<1) { // Проверка: ночь ли в данный момент
//         console.log("КАПЭС НОЧЬ УЖЕ!");
//         app.get('/', (req, res) => res.send('КАПЭС НОЧЬ УЖЕ!'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Night.gif'); //Установка значка
//         }

//         if (hoursCount>=1 && hoursCount<8) { // Проверка: утро  ли в данный момент
//         console.log("УТРО! ПАРА ВСТАВАЦ НА");
//         app.get('/', (req, res) => res.send('УТРО! ПАРА ВСТАВАЦ НА'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Morning.gif'); //Установка значка

//         }

//         if (hoursCount>=8 && hoursCount<15) { // Проверка: день ли в данный момент
//         console.log("КАПЭС!!! ДЕНЬ ЧОРТ ПАБИРИ");
//         app.get('/', (req, res) => res.send('КАПЭС!!! ДЕНЬ ЧОРТ ПАБИРИ'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Day.gif'); //Установка значка
//         }

//                 if (hoursCount>=15 && hoursCount<22) { // Проверка: вечер ли в данный момент
//         console.log("ЖЭСТЬ ВАЩЭ УЖЭ ВЕЧИР!!!!11!!");
//         app.get('/', (req, res) => res.send('ЖЭСТЬ ВАЩЭ УЖЭ ВЕЧИР!!!!11!!'));
//         const guild = client.guilds.cache.get("544902879534907392");
//         guild.setIcon('./images/icons/Evening.gif'); //Установка значка
//         }
//         const guild = client.guilds.cache.get("544902879534907392"); // Создание константы, хранящей айди сервера
//         // guild.setName(Test2); //Установка (Test2)соответсвующего имени сервера
if (hoursCount+3>24)
{
  hoursCount = hoursCount + 3 - 24
} else {
  hoursCount = hoursCount+3
}
        const guild = client.guilds.cache.get("544902879534907392");
console.log('hoursCount='+hoursCount)

//Смена иконки сервера в зависимости от времени (hoursCount=час по мск)

console.log('LastHour='+LastHour)
      console.log('Час (МСК): '+ hoursCount)
      if (hoursCount > 12 && hoursCount!=24)
      {
        if (hoursCount-12!=LastHour)
        {
          console.log('НОВЫЙ ЧАС! СОБЫТИЕ: СМЕНА ЗНАЧКА');
        mn = hoursCount - 12;
        var PartDirection = ['./images/AdvancedIcons/' + mn + 'pm.gif']
        let FullDirection = PartDirection.join('');
        console.log(FullDirection);
        guild.setIcon(FullDirection); //Установка значка
        LastHour=mn;
        }
      }else{
                if (hoursCount!=LastHour)
        {
           if (hoursCount!=24)
           {
          console.log('НОВЫЙ ЧАС! СОБЫТИЕ: СМЕНА ЗНАЧКА');
        var PartDirection = ['./images/AdvancedIcons/' + hoursCount + 'am.gif']
        let FullDirection = PartDirection.join('');
        console.log(FullDirection);
        guild.setIcon(FullDirection); //Установка значка
        LastHour=hoursCount;
           }
  
        {
         guild.setIcon('./images/AdvancedIcons/12am.gif'); 
        }
        }
      }
      console.log(LastHour)
        
    }, 30000);  //900000 - интервал в милисекундах между проверками (900 000 = 15 минут)
}

module.exports = { set }

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