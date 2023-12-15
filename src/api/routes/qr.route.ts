/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";

import {
  CreateIndex,
  CheckIndex,
  DeleteIndex
} from "../../controllers/qr.controller";
import { ValidateSchema } from "../middlewares/body.validator";
import {
  ICreateQRBody,
  IGetQRImage,
  IPostAddQRStatus
} from "../../types/request.interfaces";
import {
  AddQRStatusSchema,
  CreateQRSchema,
  GetQRImageSchema
} from "../schemas/request.schemas";
const QRRouter = Router();

export default (app: Router) => {
  app.use("/model", QRRouter);

  QRRouter.post(
    "/CheckIndex",

    //ValidateSchema<ICreateQRBody>(CreateQRSchema),
    CheckIndex
  );

  QRRouter.post(
    "/CreateIndex",

    //ValidateSchema<ICreateQRBody>(CreateQRSchema),
    CreateIndex
  );

  QRRouter.post(
    "/DeleteIndex",

    //ValidateSchema<ICreateQRBody>(CreateQRSchema),
    DeleteIndex
  );
};
