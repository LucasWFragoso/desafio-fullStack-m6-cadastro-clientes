import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";
import { getRounds, hashSync } from 'bcryptjs';

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:200})
    name:string

    @Column({length: 45,  unique: true })
    email: string

    @Column({length: 120})
    password: string

    @Column({length: 10 })
    telefone: string

    @CreateDateColumn({type:"date"})
    createdAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isHashed = getRounds(this.password)
        if(!isHashed){
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Contact, contact => contact.client)
    contacts: Contact[]
}

export {
    Client
}