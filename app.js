const express = require('express');
const bodyParser = require('body-parser');
const helpers = require("./helpers/utils");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    let obj = {
        countPalindrom: 0,
        origin: null
    };

    let count = req.query.count;
    let origin = req.query.origin;

    if (count != undefined) {
        obj = {
            countPalindrom: count,
            firstWordPalindrom: count >= 1 ? origin.split(' ')[0] : '-',
            origin: origin
        };
    }

    res.render('index.ejs', obj);
})

app.post('/check-palindrom', (req, res) => {
    let origin = req.body.palindrom;

    if (helpers.validString(origin)) {
        let reverse = origin.split('').reverse().join('');

        if (origin === reverse) {
            let countPalindrom = origin.split(' ').length;

            return res.redirect(`/?count=${countPalindrom}&origin=${origin}`);
        }
    }

    return res.redirect(`/?origin=${origin}`);
})

app.listen(3000, function () {
    console.log('listening on 3000')
})