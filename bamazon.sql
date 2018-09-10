
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;


USE bamazon;

CREATE TABLE products (

  item_id INT NOT NULL AUTO_INCREMENT,
  
  product_name VARCHAR(90),

  department_name VARCHAR(90),


  price INT(10),

  stock_quantity INT(10),
  
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
(" Bronto Burger Rock        ", "Rocks that look like things        ", 10000, 1),
(" 2x4 Building Boulders Rock", "Rocks that look like things        ", 100, 15),
(" Couch Rock                ", "Rocks that look like things        ", 20, 5000),
(" Cinderella Stone Book Rock", "Rocks that look like things        ", 20, 100),
(" Bedrock                   ", "Rocks that don't look like things  ", 9301960, 2500),
(" Quarry Rock               ", "Rocks that don't look like things  ", 50, 15),
(" Rock Vegas Rock           ", "Rocks that don't look like things  ", 2, 1000),
(" Bowling Ball Rock         ", "Rocks that kind of look like things", 100, 10),
(" Old Fruity Pebbles        ", "Rocks that kind of look like things", 2, 37),
(" Car Tire Rock             ", "Rocks that kind of look like things", 75, 100),
(" Golf Club Head Rock       ", "Rocks that kind of look like things", 50, 50);


SELECT * FROM products;
