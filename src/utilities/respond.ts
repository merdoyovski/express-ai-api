import { type Response } from "express";
import { StatusCodes } from "http-status-codes";

function success(
  response: Response,
  message: string,
  data: object,
  statusCode: number = StatusCodes.OK
): Response {
  return response.status(statusCode).json({
    message,
    data
  });
}

function failure(
  response: Response,
  message: string,
  statusCode: number = StatusCodes.BAD_REQUEST
): Response {
  return response.status(statusCode).json({
    message
  });
}

function error(
  response: Response,
  message: string,
  error: unknown,
  statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
): Response {
  console.log(error);
  return response.status(statusCode).json({
    message
  });
}

export const respond = { success, failure, error };
