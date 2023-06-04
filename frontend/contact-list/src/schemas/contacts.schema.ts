import { z } from "zod";

export const contactResponseSchema = z.object({
    id: z.number(),
    name: z.string().max(200),
    email: z.string().email().max(45),
    telefone: z.string().max(10),
    createdAt: z.string()
})

export const contactSchema = contactResponseSchema.omit({
    id: true,
    createdAt: true,
})

export type TContactResponse = z.infer<typeof contactResponseSchema>
export type TContact = z.infer<typeof contactSchema>
