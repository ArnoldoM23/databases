var db = require('../db');




module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      db.connect.query('INSERT INTO messages SET ?', req.body, function(err,res){
        if(err) throw err;
        console.log('Last insert ID:', res.insertId);
        // database.connect.end()
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      console.log('inside on models post for users')
    }
  }
};

