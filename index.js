const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

//Create Connection 
//mongoClient.connect(url, (err, db) => {
//    if (err) throw err;
//    console.log("MongoDB Connected");
//    db.close();
//})

//Display Data


mongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("companiesDB");
    dbo.collection("companies").findOne({ name: "Babelgum" }, (err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })
})