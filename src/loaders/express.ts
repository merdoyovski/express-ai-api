import express, { Express } from "express";
import cors from "cors";
import routes from "../api";
import config from "../config";

export default async ({ app }: { app: Express }) => {
  //Health Check endpoints
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");
  app.use(cors());
  app.use(express.json());

  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  interface CustomError extends Error {
    status?: number;
  }

  app.use((req, res, next) => {
    const err: CustomError = new Error("Endpoint Not Found");
    err.status = 404;
    next(err);
  });

  /// error handlers
  app.use((err: any, req: any, res: any, next: any) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};
