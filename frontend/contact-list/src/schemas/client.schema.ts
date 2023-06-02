import { z } from "zod";


export const clientSchema = z.object({
    name: z.string().max(200),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telefone: z.string().max(10),
})

export const loginSchema = z.object({
    email: z.string().email().max(45),
    password: z.string().max(120)
})

export type ClientData = z.infer<typeof clientSchema>
export type LoginData = z.infer<typeof loginSchema>