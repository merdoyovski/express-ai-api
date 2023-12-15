/*import { db } from "../loaders/database";
import { IQRStatus, type IQR } from "../types/qr.interfaces";

export async function InsertQR(qr: IQR, trx = db) {
  const result = await trx.insert(qr).into("tbl_qr").returning("qrid");

  return result[0]["qrid"];
}

export async function InsertLkpUserQR(qrid: string, userid: number, trx = db) {
  const lkpUserQr = {
    qrid: qrid,
    ownerid: userid,
    ownertype: "user",
    permission: "owner"
  };

  await trx.insert(lkpUserQr).into("lkp_userqr");
}

export async function InsertStatus(
  trx = db,
  location: string = "",
  arrival: string = ""
) {
  const loc = location ? location : "initial";
  const arr = arrival ? arrival : undefined;
  const status: IQRStatus = { location: loc, arrival: arr };

  const result = await trx
    .insert(status)
    .into("tbl_status")
    .returning("statusid");

  return result[0]["statusid"];
}

export async function InsertLkpStatusQR(
  qrid: string,
  statusid: number,
  trx = db
) {
  await trx.insert({ qrid, statusid }).into("lkp_statusqr");
}

export async function FindOneQR(qrid: string, trx = db): Promise<IQR[] | null> {
  const qr = await trx.select("*").from("tbl_qr").where("qrid", qrid);
  return qr;
}

export async function ValidateQROwnership(
  userid: number,
  qrid: string,
  trx = db
): Promise<boolean> {
  const result: any = await trx
    .select("ownerid")
    .from("lkp_userqr")
    .where("qrid", qrid)
    .first();

  const ownerid = parseInt(result["ownerid"]);
  return userid === ownerid;
}
*/
