const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('From client' + req.body);
    res.send('hello world');
});

app.get('/pizza', (req, res) => {
    console.log(req.body.Title);
    res.send('Your message was: ' + req.body.Value);
});

app.post('/ar', (req, res) => {
    console.log(req.body.Title);
    res.send('Post Request recieved: ' + req.body.Value);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

