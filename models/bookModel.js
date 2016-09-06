var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var bookSchema = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default: false},
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Book',bookSchema);
