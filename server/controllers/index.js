var models = require('../models');
var bluebird = require('bluebird');
var database = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {  
      database.connect.query('SELECT * FROM messages', function(err,result){
        if(err) throw err;
        res.send(JSON.stringify(result));
      });
    }, 
    post: function (req, res) {
      database.connect.query('INSERT INTO messages SET ?', req.body, function(err){
        if(err) throw err;
      });
      res.send("Data stored");
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside the get require')
       res.send('Hello from get in users');
    },
    post: function (req, res) {
      res.send('hello world');
    }
  }
};

