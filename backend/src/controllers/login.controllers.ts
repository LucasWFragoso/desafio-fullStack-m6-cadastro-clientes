import { Request, Response } from "express";
import { TLoginData } from "../interfaces/login.interfaces";
import { loginClientService } from "../services/login";


export const loginClientController = async (req: Request, res: Response): Promise <Response> => {
    const loginData: TLoginData = req.body

    const token: string = await loginClientService(loginData)

    return res.status(200).json({
        token: token
    })
}