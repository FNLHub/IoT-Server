const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var fanData = 0;

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());

app.get('/Login', (req, res) => {
    // should be a key that the server generates to establish a secure connection
    res.send('1234');
});

app.get('/FanSpeed', (req,res) => {
    res.header('Auth', '1234');
    res.send('' + fanData);
});

app.get('/Ping', (req, res) => {
    res.send('Is your name WiFi? Cause I\'m feeling a connection. ;)');
});

app.post('/Update2', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

app.post('/Update3', (req, res) => {
    let fanData = req.body.fanData;
    //let inputContent = req.body.textField;
	console.log(fanData);
});

app.post('/Update', (req, res) => {
    fanData = req.body.fanData;
    console.log('req: ' + req.body);
    res.send('Updated local data: ' + fanData);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

