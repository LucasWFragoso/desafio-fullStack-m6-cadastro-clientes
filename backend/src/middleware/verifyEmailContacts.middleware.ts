import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Contact } from "../entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors"


const verifyEmailContactExistMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const email: string = req.body.email

    if(email  === undefined){
        next()
    }else{
        const findClient = await contactRepository.find({
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

export default verifyEmailContactExistMiddleware