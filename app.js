// ###### Thu Aug 30 15:46:23 JST 2018
'use strict';
const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function () {
    console.log('http://localhost:' + port);
});


app.use('/public', express.static(__dirname + '/public'));

app.use('/', require('./routes/index.js'));
