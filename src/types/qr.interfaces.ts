export interface IQR {
  qrid: string;
  companyid: number;
  productid: number;
  createdAt?: Date;
}

export interface QRConfig {
  svg: string;
  url: string;
}

export enum QRType {
  URL = 0,
  ContactInfo = 1
}

export interface IQRStatus {
  id?: number;
  arrival?: string;
  location: string;
}
