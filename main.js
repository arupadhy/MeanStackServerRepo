var express = require('express'),
    book = require('./models/bookModel'),
    bodyParser = require('body-parser'),
    app = express(),
    bookRouter = express.Router(),
    mongoose = require('mongoose'),
    PORT = process.env.PORT || 3000;

//Middleware configuration
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

var db = mongoose.connect('mongodb://localhost/bookAPI')

//routing configuration
bookRouter.route('/Books')
          .get(function(req, res) {
              book.find(function(err, books) {
                  if(err) {
                      console.log(err);
                  } else {
                      res.json(books)
                  }
              });
          })
          .post(function(req, res) {
              var newBook = new book(req.body);
              res.json(newBook);
          });

app.use('/api',bookRouter);
app.get('/',function(req, res) {
    res.send('This is the home page...try using a endpoint');
})

app.listen(PORT,function(req, res) {
    console.log('Server started on port: ' + PORT);
})