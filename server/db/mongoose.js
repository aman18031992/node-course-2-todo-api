const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var url = process.env.MONGOLAB_URI;
mongoose.connect(url||'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}