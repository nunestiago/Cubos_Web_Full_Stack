import { Router } from 'express';

import { myProducts } from '../controllers/productsController';
import { general, login, register } from '../controllers/usersController';

const router = new Router();

router.post('/login', login);
router.post('/register', register);
router.get('/all', general);

router.get('/store', myProducts);

export default router;
