import { Router } from 'express';
import producto from './producto';

const router = Router();

router.use('/productos', producto);

export default router;
