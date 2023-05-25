import { z } from "zod";
import { clientDataLogin } from "../schemas/login.schemas";

type TLoginData = z.infer<typeof clientDataLogin>

export {
    TLoginData
}