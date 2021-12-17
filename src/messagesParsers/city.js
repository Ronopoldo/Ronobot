const fs = require('fs')
const result = JSON.parse(fs.readFileSync('./data/russian-cities.json'));

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		
		if (msg.content.toLowerCase().startsWith('/set city')) {
			console.log('123')

			for (let e of result) {
				if (e.name == 'Москва') {
					console.log(e.name.parent)
				}
			}

			console.log(result[5])
		}
	}
}