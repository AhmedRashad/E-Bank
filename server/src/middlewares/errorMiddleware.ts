import express, { ErrorRequestHandler, NextFunction } from "express";
const errorHandler = (req:express.Request,res:express.Response,err:ErrorRequestHandler,next:NextFunction):void => {
    
}
export default errorHandler;