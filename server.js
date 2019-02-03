const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());

app.post('/AHub', (req, res) => {
    if (req.body.SecretKey == 284923401){
        res.send('!Hello from the server');
    }
    else{
        res.send('Access denied');
    }
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

