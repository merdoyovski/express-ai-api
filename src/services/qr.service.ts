import type { ICreateQRBody } from "../types/request.interfaces";

import {
  IOperationResult,
  OperationResult,
  ErrorType,
  OperationType
} from "../utilities/error";
import { v4 as uuidv4 } from "uuid";

import { IQR } from "../types/qr.interfaces";
import QRCode from "qrcode";
import config from "../config";
import { pinecone } from "../loaders/pinecone";
import { IndexList } from "@pinecone-database/pinecone";

export async function CreateIndexService(
  indexName: string,
  dimension: number = 128,
  metric: string = "euclidean"
) {
  try {
    const indexExists = await IndexExists(indexName);

    if (!indexExists) {
      await pinecone.createIndex({
        name: indexName,
        dimension: dimension,
        metric: metric
      });
      const describedIndex = await pinecone.describeIndex("quickstart");

      return OperationResult(OperationType.Success, describedIndex);
    } else {
      return OperationResult(OperationType.Fail, ErrorType.IndexExists);
    }
  } catch (error) {
    console.log("ERROR: ", error);
    return OperationResult(OperationType.Fail, ErrorType.Unknown);
  }
}

export async function CheckIndexService(indexName: string) {
  try {
    const indexExists = await IndexExists(indexName);

    if (indexExists) {
      const describeIndex = await pinecone.describeIndex(indexName);
      const indexState = describeIndex.status?.state;

      return OperationResult(OperationType.Success, indexState);
    } else {
      return OperationResult(OperationType.Fail, ErrorType.IndexNotFound);
    }
  } catch (error) {
    console.log("ERROR: ", error);
    return OperationResult(OperationType.Fail, ErrorType.Unknown);
  }
}

export async function DeleteIndexService(indexName: string) {
  try {
    const indexExists = await IndexExists(indexName);

    if (indexExists) {
      await pinecone.deleteIndex(indexName);

      return OperationResult(OperationType.Success, indexName + " deleted");
    } else {
      return OperationResult(OperationType.Fail, ErrorType.IndexNotFound);
    }
  } catch (error) {
    console.log("ERROR: ", error);
    return OperationResult(OperationType.Fail, ErrorType.Unknown);
  }
}

async function IndexExists(indexName: string) {
  const allIndexes: IndexList = await pinecone.listIndexes();

  const indexToFind = { name: indexName };

  return allIndexes.some((index) => {
    return index.name === indexToFind.name;
  });
}

/*
export async function CreateQRService(
  data: ICreateQRBody,
  userid: number
): Promise<IOperationResult> {
  const qrData: IQR = {
    qrid: uuidv4(),
    productid: data.productid,
    companyid: data.companyid
  };
  try {
    await db.transaction(async (trx) => {
      const qrid = await InsertQR(qrData, trx);
      await InsertLkpUserQR(qrid, userid, trx);
      const statusid = await InsertStatus(trx);
      await InsertLkpStatusQR(qrid, statusid, trx);
    });

    return OperationResult(OperationType.Success, qrData.qrid);
  } catch (error) {
    console.log("ERROR: ", error);
    return OperationResult(OperationType.Fail, ErrorType.InsertFailed);
  }
}

export async function AddStatusQRService(
  qrid: string
): Promise<IOperationResult> {
  try {
    await db.transaction(async (trx) => {
      const statusid = await InsertStatus(trx);
      await InsertLkpStatusQR(qrid, statusid, trx);
    });
    return OperationResult(OperationType.Success, qrid);
  } catch (error) {
    console.log("ERROR: ", error);
    return OperationResult(OperationType.Fail, ErrorType.InsertFailed);
  }
}

export async function QRImageService(
  userid: number,
  qrid: string
): Promise<IOperationResult> {
  try {
    const isOwner = await ValidateQROwnership(userid, qrid);
    if (isOwner) {
      const result = await FindOneQR(qrid);

      if (result !== null) {
        const qrDetails = config.clientHost + "/qr/" + result[0]["qrid"];
        const qr = await QRCode.toDataURL(qrDetails);

        console.log(qr);
        const img = Buffer.from(qr, "base64");

        return OperationResult(OperationType.Success, qr);
      } else {
        return OperationResult(OperationType.Fail, ErrorType.QRNotFound);
      }
    } else {
      return OperationResult(OperationType.Fail, ErrorType.InvalidCredentials);
    }
  } catch (error) {
    console.log("ERROR: ", error);
    return OperationResult(OperationType.Fail, ErrorType.QRNotFound);
  }
}
*/
