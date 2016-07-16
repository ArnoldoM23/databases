var models = require('../models');
var bluebird = require('bluebird');
var database = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {  
      database.connect.query('SELECT * FROM messages',function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
      res.send(JSON.stringify(rows));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      database.connect.query('INSERT INTO messages SET ?', req.body, function(err,res){
        if(err) throw err;
        console.log('Last insert ID:', res.insertId);
        // database.connect.end()
      });
      res.send()

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
       res.send('Hello from get in users');
    },
    post: function (req, res) {
      
      res.send('hello world')
    }
  }
};

