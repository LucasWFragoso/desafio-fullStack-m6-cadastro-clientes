import { Repository } from "typeorm";
import { TClientPatch, TClientResponse } from "../../interfaces/clients.intefaces";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { clientSchemaResponse } from "../../schemas/clients.schema";


const patchClientService = async (idClient: number, dataPatch: TClientPatch): Promise<TClientResponse> => {
    if(dataPatch.password){
        throw new AppError('You cannot change the password', 401)
    }

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clientForPatch: Client | null = await clientRepository.findOneBy({
        id: idClient
    })

    if(!clientForPatch){
        throw new AppError('Client not found', 404)
    }

    const clientUpdated = clientRepository.create({
        ...clientForPatch,
        ...dataPatch
    })

    await clientRepository.save(clientUpdated)

    return clientSchemaResponse.parse(clientUpdated)
}

export default patchClientService