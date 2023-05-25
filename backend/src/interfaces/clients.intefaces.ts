import { z } from 'zod';
import { clientSchema, clientSchemaRequest, clientSchemaResponse, clientSchemaUpdate } from '../schemas/clients.schema';
import { DeepPartial } from 'typeorm';

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClientResponse = z.infer<typeof clientSchemaResponse>
type TClientPatch = DeepPartial<TClientRequest>

export { 
    TClient,
    TClientResponse,
    TClientRequest,
    TClientPatch
}
