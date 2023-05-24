import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";

@Entity('clients')
class Client {
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

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]
}

export {
    Client
}