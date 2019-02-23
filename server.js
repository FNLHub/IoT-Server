const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var polled = 0;

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());

app.get('/Login', (req, res) => {
    var result = 'Access Denied';

    if (req.body.SecretKey == 284923401){
        result = fanData;
    }

    // should be a key that the server generates to establish a secure connection
    res.send('1234');
});

app.get('/FanSpeed', (req,res) => {
    res.send(polled);
});

app.get('/Ping', (req, res) => {
    res.send('Is your name WiFi? Cause I\'m feeling a connection. ;)');
});

app.post('/Update', (req, res) => {
    fanData = req.body.data;
    res.send('Updated local data');
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

