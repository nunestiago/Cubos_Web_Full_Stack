import { Router } from 'express';

import { Login, Register } from '../controllers/UsersController';

const router = new Router();

router.get('/user', Login);
router.post('/user', Register);

export default router;
