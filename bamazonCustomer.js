var mysql = require("mysql");
var inquirer = require("inquirer");
var asciify = require('asciify-image');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 3306,

  // username
  user: "root",

  // password
  password: "root",
  database: "bamazon",
});

connection.connect(function(err) {
    if(err) throw err;

 
var options = {
  fit:    'box',
  width:  100,
  height: 50
}
 
asciify('assets/images/bam-bam-rubble.png', options, function (err, asciified) {
  if (err) throw err;
 
  // Print to console
  console.log(asciified);
});
});

var delayInMilliseconds = 1000; 

setTimeout(function() {
  

console.log("                           Welcome to Bamm-Bammazon");
console.log("                     The Official Rock Collector eShop of");
console.log("                               Bamm-Bamm Rubble");

productList();

}, delayInMilliseconds);


function productList() {
    connection.query("SELECT * FROM products", function(err, response) {
        console.log(" Rock ID #  |         Rock Name          |           Department Name           | Price ($) / # In Stock ");
        console.log("------------------------------------------------------------------------------------------------------");
        for (var i = 0; i < response.length; i++) {
        if (response[i]. item_id <= 9) {
        
            console.log(response[i].item_id + "           |"
            + response[i].product_name + " | " 
            + response[i].department_name + " | " 
            + response[i].price + " / " 
            + response[i].stock_quantity);
            console.log("------------------------------------------------------------------------------------------------------");
        }else{
            
            console.log(response[i].item_id + "          |"
            + response[i].product_name + " | " 
            + response[i].department_name + " | " 
            + response[i].price + " / " 
            + response[i].stock_quantity);
            console.log("------------------------------------------------------------------------------------------------------");
        }
      };
      placeOrder(); 
    });
  };

  
  
  function placeOrder() {
      inquirer.prompt([
        {
            type: 'input',
            name: 'item',
            message: 'Please enter the ID number of the rock(s) you wish to buy.'
        }, {
            type: 'input',
            name: 'quantity',
            message: 'How many of these rocks do you want?'
        }
        ]).then(function(answers) {
              connection.query("SELECT * FROM products WHERE item_id=?", [answers.item], function(err, response) {
                  var newStock = parseInt(response[0].stock_quantity) - parseInt(answers.quantity)
                  if (response[0].stock_quantity >= answers.quantity) {
                      var query = connection.query(
                          "UPDATE products SET ? WHERE ?",
                          [
                            {
                              stock_quantity: newStock
                            },
                            {
                            item_id: answers.item
                            }
                          ],
                      );
                    var purchasedProd = answers.quantity.replace(/\s+/g,' ').trim();
                    var nameProd = response[0].product_name.replace(/\s+/g,' ').trim();
                      console.log("Bamm-Bamm! Thank you for shopping with Bamm-Bamm Rubble! Your total for: " + purchasedProd + " " + nameProd + " is: $" + answers.quantity * response[0].price + ".");
                      console.log("Please press ctrl-c to exit.");
                  } else {
                      console.log("Sorry, there are not enough of these rocks in stock to fill your order.");
                      console.log("Please press ctrl-c to exit.");
                  };
  
              });
          });
  };
  

