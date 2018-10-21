var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
    completed: {
      type: Boolean
    },
    completedAt: {
      type: Number
    }
});

var newTodo = new Todo({
  text: 'coock dinner'
});


module.exports = {Todo};
