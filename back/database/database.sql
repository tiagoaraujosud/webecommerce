CREATE DATABASE ecommercedb;

CREATE TABLE users(
    id SERIAL  PRIMARY KEY,
    email VARCHAR(50),
    senha VARCHAR(65)
);

INSERT INTO users (email, senha)
    VALUES ('admin@gmail.com', 'admin'),
            ('tiagoaraujosud@gmail.com', '1234');