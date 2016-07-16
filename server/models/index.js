var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.connect.query('SELECT * FROM messages', function(err,result){
        if(err) throw err;
        res.send(JSON.stringify(result));
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      db.connect.query('INSERT INTO messages SET ?', req.body, function(err){
        if(err) throw err;
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
         console.log('inside the get require')
        db.connect.query('SELECT * FROM users', function(err,result){
          if(err) throw err;
          res.send(JSON.stringify(result));
        });
    },
    post: function (req, res) {
      console.log('inside on models post for users')
      db.connect.query('INSERT INTO users SET ?', req.body, function(err){
        if(err) throw err;
      });
    }
  }
};

