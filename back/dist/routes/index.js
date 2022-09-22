"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_controller_1 = require("../controllers/users.controller");
const products_controller_1 = require("../controllers/products.controller");
const orders_controller_1 = require("../controllers/orders.controller");
const login_controller_1 = require("../controllers/login.controller");
//Users routes
router.get('/users', users_controller_1.getUsers);
router.get('/users/:id', users_controller_1.getUserbyId);
router.post('/users', users_controller_1.createUser);
router.put('/users/:id', users_controller_1.updateUser);
router.delete('/users/:id', users_controller_1.deleteUser);
//Products routes
router.get('/products', products_controller_1.getProducts);
router.get('/products/:id', products_controller_1.getProductbyId);
router.post('/products', products_controller_1.createProduct);
router.put('/products/:id', products_controller_1.updateProduct);
router.delete('/products/:id', products_controller_1.deleteProduct);
//Orders Routes
router.post('/orders', orders_controller_1.createOrder);
router.get('/orders', orders_controller_1.getOrders);
router.get('/orders/:id', orders_controller_1.getOrderbyId);
router.delete('/orders/:id', orders_controller_1.deleteOrder);
//Login Routes
router.get('/login', login_controller_1.getLogin);
router.post('/login', login_controller_1.login);
exports.default = router;
