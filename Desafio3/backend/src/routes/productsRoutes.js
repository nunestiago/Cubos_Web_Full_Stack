import { Router } from 'express';

import { deleteProduct, myProducts } from '../controllers/productsController';

const router = new Router();

router.post('/store', myProducts);
router.delete('/store', deleteProduct);

export default router;
