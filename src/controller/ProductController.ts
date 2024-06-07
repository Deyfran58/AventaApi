import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Product } from '../entity/producto';

class ControladorProducto {
    static obtenerProductos = async (req: Request, res: Response): Promise<Response> => {
        try {
            const productos = await AppDataSource.getRepository(Product).find();
            console.log('Productos obtenidos:', productos);
            return res.status(200).json(productos);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            return res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
        }
    }

    static guardarProducto = async (req: Request, res: Response): Promise<Response> => {
        try {
            const repositorioProducto = AppDataSource.getRepository(Product);
            const producto = repositorioProducto.create(req.body);
            const resultado = await repositorioProducto.save(producto);
            console.log('Producto guardado:', resultado);
            return res.status(200).json(resultado);
        } catch (error) {
            console.error('Error al guardar producto:', error);
            return res.status(500).json({ mensaje: 'Error al guardar producto', error: error.message });
        }
    }
}

export default ControladorProducto;