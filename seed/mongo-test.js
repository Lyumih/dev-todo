const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://***:***@cluster0-qzypq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
client.connect(err => {
  console.log('start')
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection)
  client.close();
  console.log('end');
});
