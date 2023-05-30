import { Router } from "express";
import ensureTokenIsValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controllers";
import verifyEmailContactExistMiddleware from "../middleware/verifyEmailContacts.middleware";


const contactsRoutes: Router = Router()

contactsRoutes.use(ensureTokenIsValidMiddleware)
contactsRoutes.post('', ensureDataIsValidMiddleware(contactSchemaRequest), verifyEmailContactExistMiddleware, createContactController)
contactsRoutes.get('/:id', listContactController)
contactsRoutes.patch('/:id', ensureDataIsValidMiddleware(contactSchemaUpdate), verifyEmailContactExistMiddleware, updateContactController)
contactsRoutes.delete('/:id', deleteContactController)



export {
    contactsRoutes
}