import { z } from 'zod';

const clientDataLogin = z.object({
    email: z.string().email(),
    password: z.string()
})

export {
    clientDataLogin
}