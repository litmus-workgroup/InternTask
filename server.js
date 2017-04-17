var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/LitmusBilling';
/*var mongojs=require('mongojs');
var db= mongojs('view_data',['view_data'])*/
var bodyParser = require('body-parser');
app.use(bodyParser());
var path = require('path');
app.use('/static', express.static('./static'));
app.use('/angular', express.static('./angular'));


app.listen(5600, function() {
    console.log('server litsen on http:127.0.0.1:5600');
})

app.get('/insert_data', function(req, res) {
    res.sendFile(path.join(__dirname + "/UserDetails.html"))
})
app.get('/view_data', function(req, res) {
    res.sendFile(path.join(__dirname + "/static/DataView.html"))
})
app.get('/generate_bill', function(req, res) {
    res.sendFile(path.join(__dirname + "/BillGen.html"))
})


app.post('/addDetails', function(req, res) {
        var user = req.body;

        console.log(req.body);

        MongoClient.connect(url, function(err, db) {
            if (err) {
                console.log(err)
            }
            insertDocument(db, user, function(newuser) {
                res.send(newuser);
            })

        });
        var insertDocument = function(db, user, callback) {
            user["created_date"] = new Date();
            db.collection('Contacted_user_notification').insertOne(user, function(err, ops) {
                if (err) {
                    console.log(err);
                }
                console.log(ops)
                callback(ops);
            });
        };

    })
    /* get the data from database*/
app.get('/viewdata', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        db.collection('Contacted_user_notification').find({}).toArray(function(err, user) {
            if (err) {
                console.log('could not retrived data');
                res.send(err);
            } else {
                res.send(user);
            }
        });
    });
})
