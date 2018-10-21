var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());
app.post('/todos',(req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.status(200).send(doc);
  },(e) =>{
    res.status(400)
    .send(e);
  })
//  console.log(req.body);
});
app.listen(3000, () => {
  console.log('Started on port 3000');
});
//newTodo.save().then((doc) => {
//  console.log('Save todo', doc);
//}, (e) =>{
//  console.log('Unable to save todo')
//});


//var otherTodo  = new Todo({});

//otherTodo.save().then((doc) => {
//  console.log(JSON.stringify(doc, undefined,2));
//},(e) => {
//  console.log('Unable to save into mongo',e);
//});




//var user = new User({
//  email: 'oron@gmail.com'
//});
//user.save().then((doc) =>{
//  console.log('user save', doc)
//},(e) =>{
//  console.log('error when saving', e);
//});
