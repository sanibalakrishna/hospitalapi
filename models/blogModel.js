
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
});
module.exports = mongoose.model('Blog',blogSchema);