import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import { AppError } from "../errors";

const verifyEmailExistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const ClientsRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const email: string = req.body.email

    if(email  === undefined){
        next()
    }else{
        const findClient = await ClientsRepository.find({
            where: {
                email: email
            }
        })

        if(findClient.length > 0){
            throw new AppError('Email already exists', 409)
        }

        next()
    }
}

export default verifyEmailExistMiddleware