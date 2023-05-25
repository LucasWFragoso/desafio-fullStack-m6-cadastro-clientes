import { Router } from "express";
import { createClientsController, deleteClientController, listClientController, patchClientController } from "../controllers/clients.controllers";
import verifyEmailExistMiddleware from "../middleware/verifyEmailExist.middleware";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/clients.schema";
import ensureTokenIsValidMiddleware from "../middleware/ensureTokenIsValid.middleware";

const clientsRoutes: Router = Router()

clientsRoutes.post('', ensureDataIsValidMiddleware(clientSchemaRequest), verifyEmailExistMiddleware, createClientsController)
clientsRoutes.use(ensureTokenIsValidMiddleware)
clientsRoutes.get('', listClientController)
clientsRoutes.patch('', ensureDataIsValidMiddleware(clientSchemaUpdate), verifyEmailExistMiddleware, patchClientController)
clientsRoutes.delete('', deleteClientController)

export {
    clientsRoutes
}