var express = require('express');
var app = express();
var db;

const MongoClient = require('mongodb').MongoClient;

//mongodb://{hostname}:{port}/{dbname}
MongoClient.connect('mongodb://localhost:27017/tes', (err, database) => {
    if (err) return console.log(err);
    db = database;
    db.collection('test').insertOne({'db':'mongo'});
    db.collection('test').find({'db':'mongo'}).toArray(function(err, docs){console.log(docs);});
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
      });      
})

app.get('/', function (req, res) {
  res.send('Hello World!');
});

