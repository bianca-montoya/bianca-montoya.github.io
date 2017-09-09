CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INTEGER AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  product_sales DECIMAL(10,2) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, product_sales, department_name, price, stock_quantity)
VALUES ("Christian Louboutin", 0, "Designer Fashion", 850.50, 150),
  ("G Star Vest", 0, "Designer Fashion", 150.99, 200),
  ("Pellegrino", 0, "Food and Drink", 2.50, 50),
  ("Wildfox Sunglasses", 0, "Apparel", 75.00, 5),
  ("Leather Belt", 0, "Apparel", 54.25, 35),
  ("VS Underwear", 0, "Necessities", 42.42, 42),
  ("Moonlight", 0, "Films", 15.00, 25),
  ("The Devil Wears Prada", 0, "Films", 25.50, 57),
  ("Mirror", 0, "Home & Garden", 90.50, 35),
  ("Floor Lamp", 0, "Home & Garden", 19.95, 23);

  CREATE TABLE departments(
  department_id INTEGER AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  over_head_costs DECIMAL(10,2) NOT NULL,
  total_sales DECIMAL(15,2) NOT NULL,
  primary key(department_id)
);

SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs, total_sales)
VALUES ("Fashion", 200, 300),
  ("Food and Drink", 100, 200),
  ("Apparel", 50, 90),
  ("Necessities", 300, 100),
  ("Films", 35, 0),
  ("Home & Garden", 0, 100);

