import Ajv, { JSONSchemaType } from "ajv";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
const ajv = new Ajv();

export function ValidateSchema<Type>(schema: JSONSchemaType<Type>) {
  return (
    request: Request<any, any, Type>,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const validate = ajv.compile(schema);
      const valid = validate(request.body);
      if (valid) next();
      else {
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ errors: [{ message: "Error: Invalid Data" }] });
      }
    } catch (error) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .send({ errors: [{ message: "Error: Couldn't Validete Data" }] });
    }
  };
}
