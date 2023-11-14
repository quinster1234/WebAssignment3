let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    TaskName:String,
    DueDate:String,
    Subject:String,
    Description:String,
},
{
    collection:"Bio_books"
});
module.exports = mongoose.model('Book',bookModel);
