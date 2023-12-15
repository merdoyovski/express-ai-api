export interface IVerifyJWTBody {
  token: string;
}

export interface IPutBody {
  key: string;
  value: unknown;
}

export interface IGetTokenBody {
  username: string;
  password: string;
}

export interface ISignUpBody {
  userid?: number;
  username: string;
  password: string;
  email: string;
}

export interface ICreateQRBody extends IVerifyJWTBody {
  companyid: number;
  productid: number;
}

export interface ICheckIndexBody {
  indexName: string;
}

export interface ICreateIndexBody {
  indexName: string;
  dimension?: number;
  metric?: string;
  pods?: number;
  podType?: string;
}

export interface IGetQRBody {
  qrid: string;
}

export interface IPostAddQRStatus extends IVerifyJWTBody {
  qrid: string;
  location: string;
  arrival?: string;
}
export interface IGetQRImage extends IVerifyJWTBody {
  qrid: string;
}
