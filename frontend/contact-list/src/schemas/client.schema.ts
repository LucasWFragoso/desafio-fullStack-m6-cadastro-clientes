import { z } from "zod";
import { contactResponseSchema } from "./contacts.schema";


export const clientSchema = z.object({
    name: z.string().max(200),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telefone: z.string().max(10),
})

export const clientResponseSchema = z.object({
    id: z.number(),
    name: z.string().max(200),
    email: z.string().email().max(45),
    telefone: z.string().max(10),
    createdAt: z.string(),
    contacts: z.array(contactResponseSchema),
})


export const loginSchema = z.object({
    email: z.string().email().max(45),
    password: z.string().max(120)
})

export type TClientData = z.infer<typeof clientSchema>
export type TClientResponseData = z.infer<typeof clientResponseSchema>
export type TLoginData = z.infer<typeof loginSchema>