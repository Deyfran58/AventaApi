import express from "express";
import { AppDataSource } from "./data-source";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import 'reflect-metadata';

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        const app = express();

        app.use(cors());
        app.use(helmet());
        app.use(express.json());

        app.use('/', routes);

        app.listen(PORT, () => {
            console.log(`El servidor ha sido levantado en el puerto: ${PORT}. Abre http://localhost:${PORT}/productos para ver los resultados`);
        });
    })
    .catch(error => {
        console.error("Error al inicializar la fuente de datos:", error);
    });
