const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/App',(err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });
//count
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  //  console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });

  db.collection('Users').find({name: 'oron'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined,2));
  });
  client.close();
});
