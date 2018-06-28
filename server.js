var http = require('http');
var app = require('express')();
var bodyParser = require('body-parser')
var TelegramBot = require('node-telegram-bot-api');

var TOKEN = process.env.TOKEN
var bot = new TelegramBot(TOKEN);

app.use(bodyParser.json());

var idchat = process.env.ID
app.post('/', function(req, res) {
    bot.sendMessage(idchat, req.body.msg);
    res.send(true);
});


bot.onText(/\/ping/, function (msg) {
	var fromId = msg.chat.id;
	bot.sendMessage(fromId, "Pong");
	
});

bot.onText(/\/actualizar/, function (msg) {
	var fromId = msg.chat.id;
	
	/* var name = req.body.repository.repo_name;
    var tag = req.body.push_data.tag;
    var repo = name.split("/")[1]
	*/ 

	bot.sendMessage(fromId, "Nombre del DockerHub desarrollo/produccion, ejemplo ( /actualizar siep-cake:produccion )");
	
});


http.createServer(app).listen(process.env.PORT, function() {
    console.log('Server started: Listening');
});