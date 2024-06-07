import { Router } from 'express';
import ProductoControlador from "../controller/ProductoControlador";

const router = Router();

router.get('', ProductoControlador.obtenerProductos);
router.post('', ProductoControlador.crearProducto);

export default router;
