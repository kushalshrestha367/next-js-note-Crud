import type { NextFunction, Request, Response } from "express";
import type { HttpError } from "http-errors";
import envConfig from "../config/config.js";

const globalErrorHandling = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message ,
    errorStack : envConfig.environment === "development" ? err.stack : "Something went wrong"
  });
}

export default globalErrorHandling;

//register this function in app.ts file after all the routes and before the server starts listening to the port.