import { Repository } from "typeorm";
import { TClientResponse } from "../../interfaces/clients.intefaces";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const listClientService = async (idClient: number): Promise<TClientResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client  = await clientRepository.findOneBy({
        id: idClient
    })

    if(!client){
        throw new AppError('Client not found', 404)
    }

    const clientReturn = clientSchemaResponse.parse(client)

    return clientReturn
}

export default listClientService