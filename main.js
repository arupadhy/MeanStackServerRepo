var express = require('express'),
    app = express(),
    bookRouter = express.Router(),
    mongoose = require('mongoose'),
    PORT = process.env.port || 3000,
    book = require('./models/bookModel');

var db = mongoose.connect('mongodb://localhost/bookAPI');

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

          });

app.use('/api',bookRouter);
app.get('/',function(req, res) {
    res.send('This is the home page...try using a endpoint');
})

app.listen(PORT,function(req, res) {
    console.log('Server started on port: ' + PORT);
})