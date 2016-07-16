var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {  
      models.messages.get(req, res)
    }, 
    post: function (req, res) {
      models.messages.post(req, res)
      res.send("Data stored");
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside the get require')
      models.users.get(req, res)
       res.send('Hello from get in users');
    },
    post: function (req, res) {
      models.users.post(req, res)
      res.send('hello world');
    }
  }
};

