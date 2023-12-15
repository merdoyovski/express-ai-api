import { Router } from "express";
import qr from "./routes/qr.route";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  qr(app);

  return app;
};
