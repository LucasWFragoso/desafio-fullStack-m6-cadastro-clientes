import { Router } from "express";
import { createClientsController, deleteClientController, listClientController, patchClientController } from "../controllers/clients.controllers";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/clients.schema";
import ensureTokenIsValidMiddleware from "../middleware/ensureTokenIsValid.middleware";
import verifyEmailClientExistMiddleware from "../middleware/verifyEmailClient.middleware";

const clientsRoutes: Router = Router()

clientsRoutes.post('', ensureDataIsValidMiddleware(clientSchemaRequest), verifyEmailClientExistMiddleware, createClientsController)
clientsRoutes.use(ensureTokenIsValidMiddleware)
clientsRoutes.get('', listClientController)
clientsRoutes.patch('', ensureDataIsValidMiddleware(clientSchemaUpdate), verifyEmailClientExistMiddleware, patchClientController)
clientsRoutes.delete('', deleteClientController)

export {
    clientsRoutes
}