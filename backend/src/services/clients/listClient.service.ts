import { Repository } from "typeorm";
import { TClientResponse } from "../../interfaces/clients.intefaces";
import { Client, Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { clientListOneSchemaResponse } from "../../schemas/clients.schema";

const listClientService = async (idClient: number): Promise<TClientResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {
            id: idClient
        },
        relations: ['contacts']
    });

    if(!client){
        throw new AppError('Client not found', 404)
    }

    const clientReturn = clientListOneSchemaResponse.parse(client)

    return clientReturn
}

export default listClientService