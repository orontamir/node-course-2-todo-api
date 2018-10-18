const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/App',(err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(err, result) => {
    if (err) {
      return console.log('Unable to  insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })

  db.collection('Users').insertOne({
    name: 'oron',
    age: 37,
    location: 'Netanya'
  },(err, result) =>{
    if (err)
    {
      return console.log('Unable to insert todo');
    }
    console.log(JSON.stringify(result.ops, undefined,2));
  });
  client.close();
});
