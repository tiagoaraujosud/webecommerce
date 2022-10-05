import {application, Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUser, deleteUser, updateUser} from '../controllers/users.controller';
import {getProducts, getProductbyId, createProduct, deleteProduct, updateProduct} from '../controllers/products.controller';
import { createOrder, getOrders, getOrderbyId, getOrderbyUserId, deleteOrder } from '../controllers/orders.controller';
import { getLogin, login, verifyJWT } from '../controllers/login.controller';
import { createItemOrder, deleteItembyId, getItemsbyOrderId, getItemsbyUserId, updateItemsbyId } from '../controllers/item_order.controller';

//Users routes
router.get('/users', verifyJWT, getUsers);
router.get('/users/:id', verifyJWT, getUserbyId);
router.post('/users', createUser);
router.put('/users/:id', verifyJWT, updateUser);
router.delete('/users/:id', verifyJWT, deleteUser);

//Products routes
router.get('/products', getProducts);
router.get('/products/:id', getProductbyId);
router.post('/products', verifyJWT, createProduct);
router.put('/products/:id', verifyJWT, updateProduct);
router.delete('/products/:id', verifyJWT, deleteProduct);

//Orders Routes
router.get('/orders', verifyJWT, getOrders);
router.get('/orders/order/:id', verifyJWT, getOrderbyId);
router.get('/orders/user/:id', verifyJWT, getOrderbyUserId);
router.post('/orders', verifyJWT, createOrder);
router.delete('/orders/:id', verifyJWT, deleteOrder);

//Item Order Routes
router.post('/items', verifyJWT,  createItemOrder);
router.get('/items/order/:id', verifyJWT, getItemsbyOrderId);
router.get('/items/user/:id', verifyJWT, getItemsbyUserId);
router.put('/items/:id/:id_order', verifyJWT, updateItemsbyId);
router.delete('/items/:id/:id_order', verifyJWT, deleteItembyId);


//Login Routes
router.get('/login', getLogin);
router.post('/login', login);

export default router;


