function parse(msg, Discord, client,fs,talkedRecently) {
const result = JSON.parse(fs.readFileSync('./data/russian-cities.json'));

  if (msg.content.toLowerCase().startsWith('/set city')) {
console.log('123')


for (let e of JSON.parse(fs.readFileSync('./data/russian-cities.json'))) {
  if (e.name == 'Москва') { console.log(e.name.parent) }
}


console.log(result[5])
}
}
module.exports = { parse }