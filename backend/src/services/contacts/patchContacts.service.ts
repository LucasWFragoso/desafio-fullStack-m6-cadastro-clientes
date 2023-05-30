import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TContact, TContactPatch } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../errors";
import { contactSchemaResponse } from "../../schemas/contacts.schema";

const patchContactService = async (idContact: number, dataPatch: TContactPatch, clientId: number): Promise<TContact> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepository.findOne({
        where: {
            id: idContact
        },
        relations: ['client']
    })

    if(!contact){
        throw new AppError('Contact not found', 404)
    }

    if(contact.client.id !== clientId){
        throw new AppError('Insufficient permission', 401)
    }

    const contactUpdated = contactRepository.create({
        ...contact,
        ...dataPatch
    })

    await contactRepository.save(contactUpdated)

    return contactSchemaResponse.parse(contactUpdated)
}

export default patchContactService