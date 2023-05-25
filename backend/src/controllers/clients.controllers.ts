import { Request, Response } from "express";
import { TClientPatch, TClientRequest, TClientResponse } from "../interfaces/clients.intefaces";
import { createClientService, deleteClientService, listClientService, patchClientService } from "../services/clients";

export const createClientsController = async (req: Request, res: Response): Promise<Response>=>{
    const clientData: TClientRequest = req.body

    const client: TClientResponse = await createClientService(clientData)

    return res.status(201).json(client)
}

export const listClientController = async (req: Request, res: Response): Promise<Response>=>{
    const clientId: number = parseInt(res.locals.user.id)
    
    const client: TClientResponse = await listClientService(clientId)

    return res.status(200).json(client)
}

export const patchClientController = async (req: Request, res: Response): Promise<Response>=>{
    const clientId: number = parseInt(res.locals.user.id)
    const clientDataPatch: TClientPatch = req.body
    
    const client: TClientResponse = await patchClientService(clientId, clientDataPatch)

    return res.status(200).json(client)
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response>=>{
    const clientId: number = parseInt(res.locals.user.id)

    await deleteClientService(clientId)

    return res.status(204).send()
}