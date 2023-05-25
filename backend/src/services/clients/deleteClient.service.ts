import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities"
import { AppError } from "../../errors"


const deleteClientService = async (idClient: number): Promise<void> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clientToDelete = await clientRepository.findOneBy({id: idClient})

    if(!clientToDelete){
        throw new AppError('Client not found', 404)
    }

    await clientRepository.remove(clientToDelete)
}

export default deleteClientService