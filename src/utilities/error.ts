enum ErrorType {
  UserNotFound = "UserNotFound",
  UserAlreadyExists = "UserAlreadyExists",
  InvalidCredentials = "InvalidCredentials",
  InvalidToken = "InvalidToken",
  InvalidData = "InvalidData",
  InvalidOperation = "InvalidOperation",
  Unknown = "Unknown",
  InsertFailed = "InsertFailed",
  QRNotFound = "QRNotFound",
  IndexNotFound = "IndexNotFound",
  IndexExists = "IndexExists"
}

enum OperationType {
  Success,
  Fail,
  Unknown
}

interface IOperationResult {
  args?: any;
  error?: ErrorType;
}

const OperationResult = (
  operation: OperationType,
  args: any = {}
): IOperationResult => {
  if (operation === OperationType.Success) {
    return OperationSuccess(args);
  } else if (operation === OperationType.Fail) {
    return OperationFailed(args);
  } else {
    return OperationUnknown(args);
  }
};
const OperationUnknown = (args: any = {}) => {
  return {
    args: args
  };
};

const OperationFailed = (error: ErrorType, args: any = {}) => {
  return {
    error: error,
    args: args
  };
};

const OperationSuccess = (args: any = {}) => {
  return {
    args: args
  };
};

export { OperationResult, IOperationResult, ErrorType, OperationType };
