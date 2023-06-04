import { Repository } from "typeorm";
import { Client, Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { contactSchemaResponse } from "../../schemas/contacts.schema";
import { AppError } from "../../errors";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interfaces";

const createContactService = async (idClient: number, contactData: TContactRequest): Promise<TContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({
        id: idClient
    })

    if(!client){
        throw new AppError('Client not found', 404)
    }

    const contactDataWithClientId = {
        ...contactData,
        client: client
    }

    const contact: Contact = contactRepository.create(contactDataWithClientId)

    await contactRepository.save(contact)

    const contactCreate = contactSchemaResponse.parse(contact)

    return contactCreate
}

export default createContactService