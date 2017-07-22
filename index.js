const express = require('express');
const path = require('path');

var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static('node_modules'));
app.use(express.static('assets'));

app.listen(5634);
