import {application, Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUser, deleteUser, updateUser} from '../controllers/users.controller';
import {getProducts, getProductbyId, createProduct, deleteProduct, updateProduct} from '../controllers/products.controller';
import { createOrder, getOrders, getOrderbyId } from '../controllers/orders.controller';
import { getLogin, login } from '../controllers/login.controller';

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
router.post('/orders', createOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderbyId);

//Login Routes
router.get('/login', getLogin);
router.post('/login', login);

export default router;


