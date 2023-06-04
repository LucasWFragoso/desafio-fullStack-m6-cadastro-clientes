import { z } from "zod";
import { contactSchema, contactSchemaRequest, contactSchemaResponse } from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";


type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchemaResponse>
type TContactPatch = DeepPartial<TContactRequest>

export {
    TContact,
    TContactRequest,
    TContactResponse,
    TContactPatch
}