CREATE DATABASE ecommercedb;

CREATE TABLE users(
    id SERIAL  PRIMARY KEY,
    email VARCHAR(50),
    senha VARCHAR(65)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50), 
    price NUMERIC, 
    img VARCHAR(20)
);

INSERT INTO users (email, senha)
    VALUES ('admin@gmail.com', 'admin'),
            ('tiagoaraujosud@gmail.com', '1234');