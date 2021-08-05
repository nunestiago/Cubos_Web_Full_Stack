import { Router } from 'express';

import { general, login, register } from '../controllers/usersController';

const router = new Router();

router.post('/login', login);
router.post('/register', register);
router.get('/all', general);

export default router;
