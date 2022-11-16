CREATE DATABASE ecommercedb;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    senha VARCHAR(65)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50), 
    price FLOAT, 
    img VARCHAR(200)
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER,
    data_pedido TIMESTAMP,
);

CREATE TABLE item_order(
    id_item_order SERIAL PRIMARY KEY,
    id_product INTEGER,
    id_order INTEGER,
    quant INTEGER,
    item_price MONEY
);
