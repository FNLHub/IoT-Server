const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var fanData = 'DOT';

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());
app.setHeader('test', 'test');

app.get('/AHub', (req, res) => {
    res.setHeader('Auth', 'test')
    if (req.body.SecretKey == 284923401){
        const result = {
            data: fanData
        }
        res.send(fanData);
    }
    else{
        res.send('Access denied');
    }
});

app.post('/', (req, res) => {
    res.send('Is your name WiFi? Cause I\'m feeling a connection. ;)');
});

app.post('/Update', (req, res) => {
    fanData = req.body.data;
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

