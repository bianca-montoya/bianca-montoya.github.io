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

// Displaying table using console.table package
function makeTable() {

  connection.query("SELECT * FROM products", function(err, res) {
    console.table(res);
    promptCustomer(res);
  });
}

// Prompts the user to purchase a product
function promptCustomer(res) {
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What is the id of the product you would like to purchase? [Quit with Q]"
  }]).then(function(answer) {
    var correct = false;
    if (answer.choice.toUpperCase() === "Q") {
      process.exit();
    }
// Checking to see if the user chose one of the items on the list
    for (var i = 0; i < res.length; i++) {
// Converting the user choice into an integer
      if (res[i].item_id === parseInt(answer.choice)) {
// If the user chose a valid product id we ask how many products they would like to purchase
        correct = true;
        askHowMany(res[i], answer);
        break;
      }
    }

    if (!correct) {
      console.log("Not a valid selection!");
      promptCustomer(res);
    }
  });
}

function askHowMany(product, productList) {

  inquirer.prompt({
    type: "input",
    name: "quant",
    message: "How many would you like to buy?"
  }).then(function(answer) {

// Checking product quantity and updating database
    if ((product.stock_quantity - answer.quant) > 0) {
      connection.query("UPDATE products SET stock_quantity='" + (product.stock_quantity - answer.quant) + "', product_sales='" + (product.product_sales + answer.quant * product.price) + "' WHERE item_id='" + product.item_id + "'", function() {
          connection.query("UPDATE departments SET total_sales=total_sales+'" + (answer.quant * product.price) + "' WHERE department_name='" + product.department_name + "';", function() {
              console.log("SALES ADDED TO DEPARTMENT!");
            });
          console.log("Product Bought!");

// Displaying the updated database
          makeTable();
        });
    }
    else {
// Checking if a valid selection was made and prompting the customer to make a validate selection.
      console.log("Not a valid selection!");
      promptCustomer(productList);
    }
  });
}
