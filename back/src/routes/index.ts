import {application, Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUser, deleteUser, updateUser, getUserbyEmail} from '../controllers/users.controller';
import {getProducts, getProductbyId, createProduct, deleteProduct, updateProduct} from '../controllers/products.controller';
import { createOrder, getOrders, getOrderbyId, getOrderbyUserId, deleteOrder } from '../controllers/orders.controller';
import { getLogin, login, verifyJWT } from '../controllers/login.controller';
import { createItemOrder, deleteItembyId, getItemsbyOrderId, getItemsbyUserId, updateItemsbyId } from '../controllers/item_order.controller';

//Users routes
router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.get('/users/email/:email', getUserbyEmail);
router.post('/users', createUser);
router.put('/users/:id', getLogin, updateUser);
router.delete('/users/:id', getLogin, deleteUser);

//Products routes
router.get('/products', getProducts);
router.get('/products/:id', getLogin,getProductbyId);
router.post('/products', createProduct);
router.put('/products/:id', getLogin, updateProduct);
router.delete('/products/:id', getLogin, deleteProduct);

//Orders Routes
router.get('/orders', getOrders);
router.get('/orders/order/:id', getLogin, getOrderbyId);
router.get('/orders/user/:id', getLogin, getOrderbyUserId);
router.post('/orders', getLogin, createOrder);
router.delete('/orders/:id', getLogin, deleteOrder);

//Item Order Routes
router.post('/items', getLogin,  createItemOrder);
router.get('/items/order/:id', getItemsbyOrderId);
router.get('/items/user/:id', getItemsbyUserId);
router.put('/items/:id/:id_order', getLogin, updateItemsbyId);
router.delete('/items/:id/:id_order', getLogin, deleteItembyId);


//Login Routes
router.get('/login', getLogin);
router.post('/login', login);

export default router;


