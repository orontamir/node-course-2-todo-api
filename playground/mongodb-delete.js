const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/App',(err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connect to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    console.log(`deleteMany: ${result}`);
  })
  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    console.log(`deleteOne: ${result}`);
  })
  db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
    console.log(`findOneAndDelete: ${result}`);
  })
  db.collection('Users').deleteMany({name: 'oron'});
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5bc83b82e943b511240363f0")}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
  })
  client.close();
});
