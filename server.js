var http = require('http');
var app = require('express')();
var bodyParser = require('body-parser')
var TelegramBot = require('node-telegram-bot-api');

var TOKEN = process.env.TOKEN
var bot = new TelegramBot(TOKEN, {polling: true});

app.use(bodyParser.json());

var idchat = process.env.ID
app.post('/', function(req, res) {
    bot.sendMessage(idchat, req.body.msg);
    res.send(true);
});

http.createServer(app).listen(process.env.PORT, function() {
    console.log('Server started: Listening');
});