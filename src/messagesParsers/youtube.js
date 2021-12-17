const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

let talkedRecently = new Set()

module.exports = {
	"parse": (args) => {
		let msg = args.msg
		if (msg.content.toLowerCase().startsWith(`/set youtube`)) {
			if (talkedRecently.has(msg.author.id)) {
				return msg.channel.send("**__Защита от спама!__**\n Хей! Команду можно использовать только раз в 10 секунд! Это сделано для защиты от спама и отправки слишком большого количества API запросов");
			}

			try {
				// If modifying these scopes, delete your previously saved credentials
				// at ~/.credentials/youtube-nodejs-quickstart.json
				var SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
				var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
					process.env.USERPROFILE) + '/.credentials/';
				var TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json';

				const args = msg.content.slice(`/био`).split(/ +/);
				if (args.length >= 2) {
					let NeededInput = args[2]

					function getid(id) {
						let split = id.split('/');
						split = split.filter(Boolean);
						return split[split.length - 1];
					}

					// Load client secrets from a local file.
					fs.readFile('client_secret.json', function processClientSecrets(err, content) {
						if (err) {
							console.log('Error loading client secret file: ' + err);
							return;
						}
						// Authorize a client with the loaded credentials, then call the YouTube API.
						authorize(JSON.parse(content), getChannel);
					});

					/**
					 * Create an OAuth2 client with the given credentials, and then execute the
					 * given callback function.
					 *
					 * @param {Object} credentials The authorization client credentials.
					 * @param {function} callback The callback to call with the authorized client.
					 */
					function authorize(credentials, callback) {
						var clientSecret = credentials.installed.client_secret;
						var clientId = credentials.installed.client_id;
						var redirectUrl = credentials.installed.redirect_uris[0];
						var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

						// Check if we have previously stored a token.
						fs.readFile(TOKEN_PATH, function (err, token) {
							if (err) {
								getNewToken(oauth2Client, callback);
							} else {
								oauth2Client.credentials = JSON.parse(token);
								callback(oauth2Client);
							}
						});
					}

					/**
					 * Get and store new token after prompting for user authorization, and then
					 * execute the given callback with the authorized OAuth2 client.
					 *
					 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
					 * @param {getEventsCallback} callback The callback to call with the authorized
					 *     client.
					 */
					function getNewToken(oauth2Client, callback) {
						var authUrl = oauth2Client.generateAuthUrl({
							access_type: 'offline',
							scope: SCOPES
						});
						console.log('Authorize this app by visiting this url: ', authUrl);
						var rl = readline.createInterface({
							input: process.stdin,
							output: process.stdout
						});
						rl.question('Enter the code from that page here: ', function (code) {
							rl.close();
							oauth2Client.getToken(code, function (err, token) {
								if (err) {
									console.log('Error while trying to retrieve access token', err);
									return;
								}
								oauth2Client.credentials = token;
								storeToken(token);
								callback(oauth2Client);
							});
						});
					}

					/**
					 * Store token to disk be used in later program executions.
					 *
					 * @param {Object} token The token to store to disk.
					 */
					function storeToken(token) {
						try {
							fs.mkdirSync(TOKEN_DIR);
						} catch (err) {
							if (err.code != 'EEXIST') {
								throw err;
							}
						}
						fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
							if (err) throw err;
							console.log('Token stored to ' + TOKEN_PATH);
						});
					}

					/**
					 * Lists the names and IDs of up to 10 files.
					 *
					 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
					 */
					function getChannel(auth) {

						var service = google.youtube('v3');
						service.channels.list({
							auth: auth,
							part: 'snippet,contentDetails,statistics',
							id: getid(NeededInput)
						}, function (err, response) {
							if (err) {
								console.log('The API returned an error: ' + err);
								return;
							}
							var channels = response.data.items;
							try {
								if (channels.length == 0) {
									console.log('No channel found.');
								} else {
									console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
										'it has %s views.',
										channels[0].id,
										channels[0].snippet.title,
										channels[0].statistics.viewCount);
									let ChannelSubs = 'Количество подписок скрыто!'
									let ChannelId = channels[0].id
									let ChannelName = channels[0].snippet.title
									let ChannelViews = channels[0].statistics.viewCount
									let ChannelVideos = channels[0].statistics.videoCount
									if (channels[0].statistics.hiddenSubscriberCount == false) {
										ChannelSubs = channels[0].statistics.subscriberCount
									}
									console.log(response.data.items)

									msg.channel.send('Пользователь найден! ' + ChannelName)

									Date.prototype.format = function (format = 'yyyy-mm-dd') {
										const replaces = {
											yyyy: this.getFullYear(),
											mm: ('0' + (this.getMonth() + 1)).slice(-2),
											dd: ('0' + this.getDate()).slice(-2),
											hh: ('0' + this.getHours()).slice(-2),
											MM: ('0' + this.getMinutes()).slice(-2),
											ss: ('0' + this.getSeconds()).slice(-2)
										};
										let result = format;
										for (const replace in replaces) {
											result = result.replace(replace, replaces[replace]);
										}
										return result;
									};

									let NeededDate = new Date().format('yyyy/mm/dd')

									let youtubepath = './data/UserData/' + msg.author.id;
									if (!fs.existsSync(youtubepath)) {
										fs.mkdir(youtubepath, err => { })
									}

									fs.writeFile(youtubepath + '/youtube', 'Информация об YouTube канале пользователя. Код от Ronopoldo 10/16/2021 в 1:52:52 по МСК' + '\n' + ChannelId + '\n' + ChannelName + '\n' + ChannelViews + '\n' + ChannelVideos + '\n' + ChannelSubs + '\n' + NeededDate, err => { });
									console.log('Данные внесены!')
									msg.channel.send('Данные успешно внесены!')
									msg.channel.send('**__Вся информация о ютуб канале собрана и предоставлена ниже...__**' + '\nСсылка на канал: https://youtube.com/channel/' + ChannelId + '\nНазвание канала: `' + ChannelName + '`\nКоличество просмотров на канале: `' + ChannelViews + '`\nКоличество видео на канале: `' + ChannelVideos + '`\nКоличество подписок у канала: `' + ChannelSubs + '`\n\nИНФОРМАЦИЯ АКТУАЛЬНА НА ' + NeededDate)
								}
							} catch (err) {
								msg.reply('Хей! Произошла ошибка >w<\nУбедись, что ты правильно ввёл ссылку или идентификатор канала!\nНапомню, что идентификатор должен быть в виде "UCP2oEd3q8m4JAIZ5rfSQZAA"\nА ссылка в таком: "https://www.youtube.com/channel/UCP2oEd3q8m4JAIZ5rfSQZAA" (также допускается отсутствие протокола, "www", а также "channel" или написания вместо него "c" или "user"\nПользовательские URL канала НЕ принимаются\n\nТакже ты можешь взять идентификатор здесь: https://www.youtube.com/account_advanced - он находится в пункте "Идентификатор канала"\n\nЕсли ты считаешь, что ввёл всё верно, то открой проблему на GitHub и укажи там введённый идентификатор и данную ошибку: `' + err + '`')
							}
						});
					}
				}
			} catch (err) {
				msg.reply('Хей! Произошла ошибка >w<\nУбедись, что ты правильно ввёл ссылку или идентификатор канала!\nНапомню, что идентификатор должен быть в виде "UCP2oEd3q8m4JAIZ5rfSQZAA"\nА ссылка в таком: "https://www.youtube.com/channel/UCP2oEd3q8m4JAIZ5rfSQZAA" (также допускается отсутствие протокола, "www", а также "channel" или написания вместо него "c" или "user"\nПользовательские URL канала НЕ принимаются\n\nТакже ты можешь взять идентификатор здесь: https://www.youtube.com/account_advanced - он находится в пункте "Идентификатор канала"\n\nЕсли ты считаешь, что ввёл всё верно, то открой проблему на GitHub и укажи там введённый идентификатор и данную ошибку: `' + err + '`')
			}

			talkedRecently.add(msg.author.id);

			setTimeout(() => {
				talkedRecently.delete(msg.author.id);
			}, 10000);
		}
	}
}