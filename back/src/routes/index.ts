import {application, Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUser, deleteUser, updateUser} from '../controllers/users.controller';
import {getProducts, getProductbyId, createProduct, deleteProduct, updateProduct} from '../controllers/products.controller';
import { createOrder, getOrders, getOrderbyId, getOrderbyUserId, deleteOrder } from '../controllers/orders.controller';
import { getLogin, login } from '../controllers/login.controller';
import { createItemOrder, deleteItembyId, getItemsbyOrderId, getItemsbyUserId, updateItemsbyId } from '../controllers/item_order.controller';

//Users routes
router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//Products routes
router.get('/products', getProducts);
router.get('/products/:id', getProductbyId);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

//Orders Routes
router.get('/orders', getOrders);
router.get('/orders/order/:id', getOrderbyId);
router.get('/orders/user/:id', getOrderbyUserId);
router.post('/orders', createOrder);
router.delete('/orders/:id', deleteOrder);

//Item Order Routes
router.post('/items', createItemOrder);
router.get('/items/order/:id', getItemsbyOrderId);
router.get('/items/user/:id', getItemsbyUserId);
router.put('/items/:id/:id_order', updateItemsbyId);
router.delete('/items/:id/:id_order', deleteItembyId);


//Login Routes
router.get('/login', getLogin);
router.post('/login', login);

export default router;


