var express = require('express'),
    book = require('../models/bookModel');

var routes = function() {
    var bookRouter = express.Router();
    bookRouter.route('/Books')
          .get(function(req, res) {
              //filtering logic in place now based on genre
              var query = [];
              //cleaner way of filtering on a particular attribute
              if(req.query.genre) {
                  query.genre = req.query.genre;
              }
              book.find(query,function(err, books) {
                  if(err) {
                      console.log(err);
                  } else {
                      res.json(books)
                  }
              });
          })
          .post(function(req, res) {
              var newBook = new book(req.body);
              newBook.save();
              res.status(201).send(newBook);
          });
    
    bookRouter.route('/Books/:bookId')
              .get(function(req, res) {
                  book.findById(req.params.bookId,function(err, book) {
                      if(err) {
                          console.log(err);
                      } else{
                          res.json(book);
                      }
                  })
              });
          
          return bookRouter;
};
module.exports = routes;