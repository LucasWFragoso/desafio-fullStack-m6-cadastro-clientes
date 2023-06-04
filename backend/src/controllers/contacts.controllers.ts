import { Request, Response } from "express";
import { TContactPatch, TContactRequest, TContactResponse } from "../interfaces/contacts.interfaces";
import { createContactService, listContactService, patchContactService } from "../services/contacts";
import deleteContactService from "../services/contacts/deleteContact.service";


export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id)
    const contactData: TContactRequest = req.body

    const contact: TContactResponse = await createContactService(clientId, contactData)

    return res.status(201).json(contact)
}

export const listContactController = async (req: Request, res: Response): Promise<Response> => {
    const idContact: number = parseInt(req.params.id)
    const clientId: number = parseInt(res.locals.user.id)

    const contact: TContactResponse = await listContactService(idContact, clientId)

    return res.status(200).json(contact)
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id)
    const idContact: number = parseInt(req.params.id)
    const dataPatch: TContactPatch = req.body

    const contact: TContactResponse = await patchContactService(idContact, dataPatch, clientId)

    return res.status(200).json(contact)
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    const clientId: number = parseInt(res.locals.user.id)
    const idContact: number = parseInt(req.params.id)

    await deleteContactService(idContact, clientId)
    return res.status(204).send()
}