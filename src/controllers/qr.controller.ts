import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import type {
  ICheckIndexBody,
  ICreateIndexBody,
  ICreateQRBody,
  IGetQRImage,
  IPostAddQRStatus
} from "../types/request.interfaces";

import { IOperationResult } from "../utilities/error";
/*
import {
  AddStatusQRService,
  CreateQRService,
  QRImageService
} from "../services/qr.service";
*/

import {
  CheckIndexService,
  CreateIndexService,
  DeleteIndexService
} from "../services/qr.service";

export async function CreateIndex(
  request: Request<any, any, ICreateIndexBody>,
  response: Response
): Promise<void> {
  const data = request.body;
  const result: IOperationResult = await CreateIndexService(data.indexName);
  if (result.error) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .send({ errors: [{ message: result.error }] });
  } else {
    response.status(StatusCodes.OK).send({
      args: result.args
    });
  }
}

export async function CheckIndex(
  request: Request<any, any, ICheckIndexBody>,
  response: Response
): Promise<void> {
  const data = request.body;

  const result: IOperationResult = await CheckIndexService(data.indexName);
  if (result.error) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .send({ errors: [{ message: result.error }] });
  } else {
    response.status(StatusCodes.OK).send({
      args: result.args
    });
  }
}

export async function DeleteIndex(
  request: Request<any, any, ICheckIndexBody>,
  response: Response
): Promise<void> {
  const data = request.body;

  const result: IOperationResult = await DeleteIndexService(data.indexName);
  if (result.error) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .send({ errors: [{ message: result.error }] });
  } else {
    response.status(StatusCodes.OK).send({
      args: result.args
    });
  }
}

/*
export async function CreateQRValidate(
  request: Request<any, any, ICreateQRBody>,
  response: Response
): Promise<void> {
  const data = request.body;
  const userid = response.locals.decoded.userid;

  const result: IOperationResult = await CreateQRService(data, userid);
  if (result.error) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .send({ errors: [{ message: result.error }] });
  } else {
    response.status(StatusCodes.OK).send({
      args: result.args
    });
  }
}

export async function AddQRStatus(
  request: Request<any, any, IPostAddQRStatus>,
  response: Response
): Promise<void> {
  const data = request.body;

  const qrid = data.qrid;
  const location = data.location;
  const arrival = data.arrival ? data.arrival : undefined;
  const status: IQRStatus = {
    location,
    arrival
  };
  const result: IOperationResult = await AddStatusQRService(qrid);

  if (result.error) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .send({ errors: [{ message: result.error }] });
  } else {
    response.status(StatusCodes.OK).send({
      args: result.args
    });
  }
}

export async function GetQRImage(
  request: Request<any, any, IGetQRImage>,
  response: Response
): Promise<void> {
  const data = request.body;
  const qrid = data.qrid;
  const userid = response.locals.decoded.userid;

  const result: IOperationResult = await QRImageService(userid, qrid);

  const img = result.args;

  if (result.error) {
    response
      .status(StatusCodes.BAD_REQUEST)
      .send({ errors: [{ message: result.error }] });
  } else {
    response.writeHead(StatusCodes.OK, {
      "Content-Type": "image/png",
      "Content-Length": img.length
    });
    response.end(img);
  }
}


export async function GetQR(
  request: Request<any, any, IGetQRBody>,
  response: Response
): Promise<void> {
  try {
    const qrId = request.body.qrId;
    const user: IUser = response.locals.decoded;
    const ownsQR: boolean = await ValidateQROwnership(qrId, user);
    if (ownsQR) {
      const qr = await FindOneQR(qrId);
      respond.success(response, "QR Retrieved", { qr }, StatusCodes.OK);
    } else {
      respond.failure(
        response,
        "QR Belongs to another user",
        StatusCodes.BAD_REQUEST
      );
    }
  } catch (err) {
    respond.error(response, "Failed to find the QR", err);
  }
}

export async function GetAllQRs(
  request: Request<any, any, IGetQRBody>,
  response: Response
): Promise<void> {
  try {
    const user: IUser = response.locals.decoded;

    const qrs = await FindAllQRs(user);
    respond.success(
      response,
      "All QRs retrieved successfully",
      { qrs },
      StatusCodes.OK
    );
  } catch (err) {
    respond.error(response, "Failed to find the QRs", err);
  }
}

*/
