// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "d6ybckq58s9ru745.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "uvug6bh5kd59ok3o",
  password: "q15ukl734iqrbus4",
  database: "usr6eb072pxjtozk"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
