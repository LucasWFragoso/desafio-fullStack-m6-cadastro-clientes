import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:200})
    name:string

    @Column({length: 45,  unique: true })
    email: string

    @Column({length: 10 })
    telefone: string

    @CreateDateColumn({type:"date"})
    createdAt: string

    @ManyToOne(() => Client, client => client.contacts, {onDelete: 'CASCADE'})
    client: Client
}

export {
    Contact
}