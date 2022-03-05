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

CREATE TABLE pedidos(
    id_pedido SERIAL PRIMARY KEY,
    id_user SERIAL REFERENCES users(id),
    id_product SERIAL REFERENCES products(id),
    data_pedido TIMESTAMP,
    pedido INTEGER[][]
);
