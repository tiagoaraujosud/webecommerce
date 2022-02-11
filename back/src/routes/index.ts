import {application, Router} from 'express';
const router = Router();

const validation = require('../middlewares/validationMiddleware');
const userSchema  = require('../validations/UserValidation');

import {getUsers, getUserbyId, createUser, deleteUser, updateUser} from '../controllers/users.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', validation(userSchema), createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;