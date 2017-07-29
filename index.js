const express = require('express');
const path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static('node_modules'));
app.use(express.static('assets'));

app.listen(app.get('port'));
