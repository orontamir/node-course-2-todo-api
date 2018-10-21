var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017:TodoApp');
console.log('step 1')

module.exports = {mongoose};
