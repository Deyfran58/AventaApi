import { DataSource } from "typeorm"
import { Producto } from './entity/producto';

export const FuenteDeDatosApp = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Utn123*",
    database: "Lab1bd",
    synchronize: false,
    logging: false,
    entities: [Producto],
    migrations: [],
    subscribers: [],
})
