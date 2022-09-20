CREATE DATABASE ecommercedb;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    senha VARCHAR(65)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50), 
    price NUMERIC, 
    img VARCHAR(20)
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    user_id SERIAL REFERENCES users(id),
    data_pedido TIMESTAMP,
);
