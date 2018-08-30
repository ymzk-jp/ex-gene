// ###### Thu Aug 30 15:46:23 JST 2018
'use strict';
const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.listen(port, function () {
    console.log('http://localhost:' + port);
});


app.get('/', function (req, res) {
    let data = {
        items: [{
                name: '<h1>Banana</h1>'
            },
            {
                name: '<h1>Apple</h1>'
            },
            {
                name: '<h1>Meron</h1>'
            }
        ],
    };
    res.render('./index', data);
});