import { NextFunction, Response, Request } from "express"
import { AnyZodObject } from "zod"

export default (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('req.body:', req.body);
      console.log('req.query:', req.query);
      console.log('req.params:', req.params);

      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      })
      return next()
    } catch (error) {
      console.error('Zod validation error:', error);
      return res
        .status(400)
        .json(error)
    }
  }
}