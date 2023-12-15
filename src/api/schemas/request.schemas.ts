import {
  ICreateQRBody,
  IGetQRImage,
  IGetTokenBody,
  IPostAddQRStatus,
  ISignUpBody
} from "@/types/request.interfaces";
import { JSONSchemaType } from "ajv";

export const SignupSchema: JSONSchemaType<ISignUpBody> = {
  type: "object",
  properties: {
    userid: { type: "number", nullable: true },
    username: { type: "string" },
    password: { type: "string" },
    email: { type: "string" }
  },
  required: ["username", "password", "email"],
  additionalProperties: false
};

export const GetTokenSchema: JSONSchemaType<IGetTokenBody> = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" }
  },
  required: ["username", "password"],
  additionalProperties: false
};

export const CreateQRSchema: JSONSchemaType<ICreateQRBody> = {
  type: "object",
  properties: {
    companyid: { type: "number" },
    productid: { type: "number" },
    token: { type: "string" }
  },
  required: ["companyid", "productid"],
  additionalProperties: false
};

export const AddQRStatusSchema: JSONSchemaType<IPostAddQRStatus> = {
  type: "object",
  properties: {
    qrid: { type: "string" },
    location: { type: "string" },
    arrival: { type: "string", nullable: true },
    token: { type: "string" }
  },
  required: ["qrid", "location"],
  additionalProperties: false
};

export const GetQRImageSchema: JSONSchemaType<IGetQRImage> = {
  type: "object",
  properties: {
    qrid: { type: "string" },
    token: { type: "string" }
  },
  required: ["qrid"],
  additionalProperties: false
};
