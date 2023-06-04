import 'express-async-errors';
import { errorHandler } from './errors';
import express, { Application } from 'express';
import { clientsRoutes } from './routers/clients.routes';
import { loginRoutes } from './routers/login.routes';
import { contactsRoutes } from './routers/contacts.routes';
import cors from 'cors';

const app: Application = express();

app.use(express.json())

app.use(cors());

app.use('/clients', clientsRoutes)
app.use('/login-clients', loginRoutes)
app.use('/contacts', contactsRoutes)

app.use(errorHandler)

export default app