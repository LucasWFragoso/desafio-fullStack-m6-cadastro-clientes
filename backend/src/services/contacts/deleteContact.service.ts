import { Repository } from "typeorm"
import { Contact } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

const deleteContactService = async (idContact: number, clientId: number): Promise<void> =>{
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

    await contactRepository.remove(contact)
}

export default deleteContactService