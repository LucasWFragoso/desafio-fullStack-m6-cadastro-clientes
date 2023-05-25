import { Repository } from "typeorm";
import { TClientRequest, TClientResponse } from "../../interfaces/clients.intefaces";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import { clientSchemaResponse } from "../../schemas/clients.schema";

const createClientService = async (clientData: TClientRequest): Promise<TClientResponse> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client = clientRepository.create(clientData)

    await clientRepository.save(client)

    const clientCreate = clientSchemaResponse.parse(client)

    return clientCreate
}

export default createClientService