import {application, Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUser, deleteUser, updateUser} from '../controllers/users.controller';
import {getProducts, getProductbyId, createProduct, deleteProduct, updateProduct} from '../controllers/products.controller';
import { createOrder, getOrders, getOrderbyId, deleteOrder } from '../controllers/orders.controller';
import { getLogin, login } from '../controllers/login.controller';
import { getItemsbyOrderId } from '../controllers/item_order.controller';

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
router.get('/orders/:id', getOrderbyId);
router.post('/orders', createOrder);
//router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

//Item Order Routes
router.get('/items/:id', getItemsbyOrderId);
//router.get('/items/:id', getItemsbyUserId);
//router.put('/items/:id', updateItemsbyOrderId);
//router.delete('/items/:id', deleteItemsbyOrderId);


//Login Routes
router.get('/login', getLogin);
router.post('/login', login);

export default router;


