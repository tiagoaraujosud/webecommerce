"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users_controller_1 = require("../controllers/users.controller");
const products_controller_1 = require("../controllers/products.controller");
const orders_controller_1 = require("../controllers/orders.controller");
const login_controller_1 = require("../controllers/login.controller");
const item_order_controller_1 = require("../controllers/item_order.controller");
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
router.get('/orders', orders_controller_1.getOrders);
router.get('/orders/order/:id', orders_controller_1.getOrderbyId);
router.get('/orders/user/:id', orders_controller_1.getOrderbyUserId);
router.post('/orders', orders_controller_1.createOrder);
router.delete('/orders/:id', orders_controller_1.deleteOrder);
//Item Order Routes
router.post('/items', item_order_controller_1.createItemOrder);
router.get('/items/order/:id', item_order_controller_1.getItemsbyOrderId);
router.get('/items/user/:id', item_order_controller_1.getItemsbyUserId);
router.put('/items/:id/:id_order', item_order_controller_1.updateItemsbyId);
router.delete('/items/:id/:id_order', item_order_controller_1.deleteItembyId);
//Login Routes
router.get('/login', login_controller_1.getLogin);
router.post('/login', login_controller_1.login);
exports.default = router;
