import { Router } from "express";
import ensureDataIsValidMiddleware from "../middleware/ensureDataIsValid.middleware";
import { clientDataLogin } from "../schemas/login.schemas";
import { loginClientController } from "../controllers/login.controllers";

const loginRoutes: Router = Router()

loginRoutes.post('', ensureDataIsValidMiddleware(clientDataLogin), loginClientController)

export {
    loginRoutes
}