import {application, Router} from 'express';
const router = Router();

import {getUsers, getUserbyId, createUser, deleteUser, updateUser} from '../controllers/users.controller';
import {getProducts, getProductbyId, createProduct, deleteProduct, updateProduct} from '../controllers/products.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/products', getProducts);
router.get('/products/:id', getProductbyId);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;