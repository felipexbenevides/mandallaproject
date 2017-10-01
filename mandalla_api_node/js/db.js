const MongoClient = require('mongodb').MongoClient;

exports.mongo = function () {
    var db;

    this.init = function(){
        MongoClient.connect('mongodb://localhost:27017/mandalla', (err, db) => {
            if (err) return console.log(err);
            // db.collection('test').insertOne({ 'db': 'mongo' });
            db.collection('test').find().toArray(function(err, docs){console.log(docs);});
            // console.log(db);
            db.close();

        });
    }


}

