import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    identificacion: number;

    @Column()
    nombre: string;

    @Column()
    cedula: string;

    @Column()
    apellido1: string;

    @Column()
    apellido2: string;

    @Column()
    fechaNacimiento: Date;

    @Column()
    genero: string;

    @Column()
    estado: boolean;
}
