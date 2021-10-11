

const express = require('express');
const fs = require("fs");
const talkedRecently = new Set();
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('ВАУ БЛЕН  ВСЁ РАБОТАЕТ! АХРЕНЕЕТЬЬ \n PS - консоль немного сдохла, мне лень ее чинить)'))
app.listen(port, () => console.log(`Локальный адрес: http://localhost:${port}`)); //Вывод порта

const Discord = require('discord.js'); 
const client = new Discord.Client();
const guild = client.guilds.cache.get("544902879534907392");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
console.log('2')
{
     var nowDate = new Date();
}
client.on("ready", () => {
  console.log('тип рабет');
client.user.setPresence({ status: "idle" });
client.user.setActivity('хентай :P', { type: 'WATCHING' }); 
client.user.setStatus('idle')
  console.log('тип рабет 2')




  
/////////////

//               V                                            V
// const message1234Parser = require( './src/messagesParsers/123' );
//               V
//    messageLoop4Parser.parse(msg);

const fInterval = require( './src/interval' );
const messagePingParser = require( './src/messagesParsers/ping' );
const messageLoop4Parser = require( './src/messagesParsers/loop4' );
const messageLockdownParser = require( './src/messagesParsers/lockdown' );
const messageBioParser = require( './src/messagesParsers/bio' );
const messageRobloxParser = require( './src/messagesParsers/roblox' );
const messageRulesParser = require( './src/messagesParsers/rules' );
const messageSeeyaParser = require( './src/messagesParsers/seeya' );
const messageNabor6Parser = require( './src/messagesParsers/nabor6' );
const messageNaborParser = require( './src/messagesParsers/nabor' );
const messageLetoParser = require( './src/messagesParsers/leto' );
const messageLetoBeganParser = require( './src/messagesParsers/letoBegan' );
const messageRemovalParser = require( './src/messagesParsers/removal' );
const messageHistoryParser = require( './src/messagesParsers/history' );
const messageZelenskyParser = require( './src/messagesParsers/zelensky' );
const messageNewsParser = require( './src/messagesParsers/news' );
const messageCC1Parser = require( './src/messagesParsers/cc1' );
const messageCC2Parser = require( './src/messagesParsers/cc2' );
const messageShowParser = require( './src/messagesParsers/show' );
const messageTalentShowParser = require( './src/messagesParsers/talentShow' );
const messageAdminParser = require( './src/messagesParsers/admin' );
const messageModerParser = require( './src/messagesParsers/moder' );
const messageEmosParser = require( './src/messagesParsers/emos' );
const countSystem = require( './src/messagesParsers/countSystem' );
const messageSubmitParser = require( './src/messagesParsers/submit' );
const messageScanParser = require( './src/messagesParsers/scan' );
const messageTransferParser = require( './src/messagesParsers/transfer' );
const messageSetBioParser = require( './src/messagesParsers/setBio' );
const messageColourParser = require( './src/messagesParsers/colour' );
 

 fInterval.set(client);
client.on('message', msg => {
  messagePingParser.parse(msg); 
  messageLoop4Parser.parse(msg);
  messageLockdownParser.parse(msg);
  messageBioParser.parse(msg, client, fs, Discord);
  messageRulesParser.parse(msg, Discord);
  messageSeeyaParser.parse(msg, Discord);
  messageNabor6Parser.parse(msg, Discord);
  messageNaborParser.parse(msg, Discord);
  messageLetoParser.parse(msg, Discord);
  messageLetoBeganParser.parse(msg, Discord);
  messageRemovalParser.parse(msg, Discord);
  messageZelenskyParser.parse(msg, Discord);
  messageHistoryParser.parse(msg, Discord);
  messageNewsParser.parse(msg, Discord);
  messageCC1Parser.parse(msg, Discord);
  messageCC2Parser.parse(msg, Discord);
  messageShowParser.parse(msg, Discord);
  messageTalentShowParser.parse(msg, Discord);
  messageAdminParser.parse(msg, Discord, client);
  messageModerParser.parse(msg, Discord, client);
  messageEmosParser.parse(msg, Discord, client);
  countSystem.parse(msg, Discord, client);
  messageSubmitParser.parse(msg, Discord, client);
  messageScanParser.parse(msg, Discord, client,fs);
  messageTransferParser.parse(msg, Discord, client,fs);
  messageRobloxParser.parse(msg, client, fs, Discord, xhr);
  messageSetBioParser.parse(msg, client, fs, Discord, xhr);
  messageColourParser.parse(msg, Discord, client,fs);
}); 


});


client.login(process.env.DISCORD_TOKEN); //Получение переменной содержащей токен (засекречена)
