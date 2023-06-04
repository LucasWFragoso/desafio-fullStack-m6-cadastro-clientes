import { Repository } from "typeorm"
import { TLoginData } from "../../interfaces/login.interfaces"
import { Client } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import jwt from 'jsonwebtoken'


const loginClientService = async (loginData: TLoginData): Promise<string> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({
        email: loginData.email
    })

    if(!client){
        throw new AppError('Invalid credentials', 401)
    }

    const passwordMatch = await compare(loginData.password, client.password)

    if(!passwordMatch){
        throw new AppError('Invalid credentials', 401)
    }

    const token: string = jwt.sign(
        {
            email: client.email
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(client.id)
        }
    )

    return token

}

export default loginClientService