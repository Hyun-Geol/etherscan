const express = require('express');
const app = express();
const ejs = require('ejs')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index');
const blockRouter = require('./routes/block');
const txRouter = require('./routes/tx');
const addressRouter = require('./routes/address');
const errRouter = require('./routes/error');

//app.use(function(req, res, next) {
//    res.status(404).send('Sorry cant find that!');
//});
app.use('/public', express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('views', __dirname + '/views');

app.use('/', indexRouter);
app.use('/block', blockRouter);
app.use('/tx', txRouter);
app.use('/address', addressRouter);
app.use('/error', errRouter);

app.listen(3000, function () {
    console.log('3000port start...')
});




