import 'express-async-errors';
import { errorHandler } from './errors';
import express, { Application } from 'express';
import { clientsRoutes } from './routers/clients.routes';
import { loginRoutes } from './routers/login.routes';

const app: Application = express();

app.use(express.json())

app.use('/clients', clientsRoutes)
app.use('/login-clients', loginRoutes)

app.use(errorHandler)

export default app