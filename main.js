var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 3000;

//Middleware configuration
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

var db = mongoose.connect('mongodb://localhost/bookAPI')

//routing configuration
bookRouter = require('./routes/bookRouter')();


app.use('/api',bookRouter);
app.get('/',function(req, res) {
    res.send('This is the home page...try using a endpoint');
})

app.listen(PORT,function(req, res) {
    console.log('Server started on port: ' + PORT);
})