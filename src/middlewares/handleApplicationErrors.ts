import httpStatus from "http-status"
import {Request, Response, NextFunction} from "express"

type error = {
    name:string,
    message:string
}

export function handleApplicationErros(error:error, req:Request, res:Response, next:NextFunction) {
    
    if (error.name === "ConflictError" || error.name === "DuplicatedEmailError") {
        return res.status(httpStatus.CONFLICT).send({
          message: error.message,
        });
      }

      if (error.name === "InvalidCredentialsError") {
        return res.status(httpStatus.UNAUTHORIZED).send({
          message: error.message,
        });
      }
      
      if (error.name === "UnauthorizedError") {       
        return res.status(httpStatus.UNAUTHORIZED).send({
          message: error.message,
        });
      }
      
      if (error.name === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send({
          message: error.message,
        });
      }

      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
      });

}