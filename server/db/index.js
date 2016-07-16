var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connect = mysql.createConnection({
  user: "root",
  password: "",
  database: 'chat'
});

connect.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established for connectYo');
});


exports.connect = connect;