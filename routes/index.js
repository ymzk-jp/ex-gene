const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
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
    res.render('index.ejs',data);
});

module.exports = router;