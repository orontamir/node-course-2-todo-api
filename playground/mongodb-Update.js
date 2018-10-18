const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/App',(err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');
//  db.collection('Todos').findOneAndUpdate({
//    _id: new ObjectID('5bc73e0292f19118546f3b35')
//  },
//  {
//    $set: {
//      completed: true
//    }
//  },
//  {
//    returnOriginal: false
//  }).then((result) => {
//    console.log(result);
//  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bc83b7fb7c18a1f1c2a72ea")
  },
  {
    $set: {
      name: 'Tamir2'
    },
    $inc: {
      age: 2
    }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  client.close();
});
