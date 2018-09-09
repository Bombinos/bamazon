
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
(" Steak Rock                ", "Rocks that look like things        ", 10000, 1),
(" 2 x 4 Lego Brick Rock     ", "Rocks that look like things        ", 100, 15),
(" Slinky Rock               ", "Rocks that look like things        ", 20, 5000),
(" Chicken Nugget Rock       ", "Rocks that look like things        ", 10, 35),
(" Petrified Wood            ", "Rocks that don't look like things  ", 10, 1000),
(" Cinderella Stone          ", "Rocks that don't look like things  ", 40, 125),
(" Dinosaur Poop Fossil      ", "Rocks that don't look like things  ", 50, 15),
(" Pea Gravel Rock           ", "Rocks that don't look like things  ", 2, 1000),
(" Lava Rock                 ", "Rocks that kind of look like things", 1000, 5),
(" Ancient Finger Bone Fossil", "Rocks that kind of look like things", 2000, 5);


SELECT * FROM products;
