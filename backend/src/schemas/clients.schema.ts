import { z } from 'zod';

const clientSchema = z.object({
    id: z.number(),
    name: z.string().max(200),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telefone: z.string().max(10),
    createdAt: z.string()
})

const clientSchemaRequest = clientSchema.omit({
    id: true,
    createdAt: true
})

const clientSchemaResponse = clientSchema.omit({
    password: true
})

const clientSchemaUpdate = clientSchemaRequest.partial()

export { 
    clientSchema,
    clientSchemaRequest,
    clientSchemaResponse,
    clientSchemaUpdate
}