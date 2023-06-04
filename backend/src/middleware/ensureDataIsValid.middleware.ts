import { NextFunction, Response, Request } from 'express';
import { ZodTypeAny } from 'zod';

const ensureDataIsValidMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const dataBody = schema.parse(req.body)
    
    req.body = dataBody

    return next()
}

export default ensureDataIsValidMiddleware