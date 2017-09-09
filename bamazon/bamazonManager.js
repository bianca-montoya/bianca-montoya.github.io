var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// Connecting to database and displaying mysql table
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection Successful!");
  makeTable();
});

function makeTable() {
// Displaying table using console.table package
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    promptManager(res);
  });
}

function promptManager(res) {
  inquirer.prompt([{
    type: "rawlist",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View products for sale", "Add new item", "Add quantity to an existing item", "View low inventory"]
  }]).then(function(answer) {
// Giving the user choices to do the following:
    if (answer.choice === "Add new item") {
      addItem();
    }
    else if (answer.choice === "Add quantity to an existing item") {
      addQuantity();
    }
    else if (answer.choice === "View low inventory") {
      viewLowInventory();
    }
    else if (answer.choice === "View products for sale") {
      makeTable();
    }
    else {
      console.log("Not a valid selection!");
      makeTable();
    }
  });
}

function addItem() {
// Prompting the user to add an item
  inquirer.prompt([{
    type: "input",
    name: "product_name",
    message: "What is the name of the product?"
  }, {
    type: "input",
    name: "department_name",
    message: "What department does this product fit into?"
  }, {
    type: "input",
    name: "price",
    message: "What is the price of the item?"
  }, {
    type: "input",
    name: "stock_quantity",
    message: "How many products are available for sale?"
  }]).then(function(answer) {

//Creating a new product based on user input
    connection.query("INSERT INTO products (product_name,department_name,price,stock_quantity)" +
    " VALUES (product_name, department_name, price, stock_quantity)", [answer.product_name, answer.department_name, answer.price, answer.quantity],
      function(err, res) {
        if (err) throw err;

        console.log(answer.product_name + "ADDED TO BAMAZON!\n");
        makeTable();
      });
  });
}

function addQuantity() {
  inquirer.prompt([{
    type: "input",
    name: "product_name",
    message: "What product would you like to update?"
  }, {
    type: "input",
    name: "added",
    message: "How much stock would you like to add?"
  }]).then(function(answer) {
    var correct = false;
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name === answer.product_name) {
        correct = true;
        findAndUpdate(answer.added, res[i].item_id);
        break;
      }
    }
    if (correct === false) {
      console.log("Not a valid selection!");
      makeTable();
    }
  });
}

function findAndUpdate(valueToAdd, itemId) {
  connection.query("UPDATE products SET stock_quantity=stock_quantity+" +
     valueToAdd + " WHERE item_id=" + itemId + ";",
    function(err, res) {
      if (err) throw err;

      console.log("Items have been added into your inventory!");
      makeTable();
    });
}

function viewLowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quantity <= 20", function(err, res) {
    if (err) throw err;

    console.table(res);
    makeTable();
  });
}


