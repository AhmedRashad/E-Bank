import {config} from "./config/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// what this lib do here ??
import colors from "colors";
import connectDB from "./config/db";

export const app = express();

app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.listen(config.port, () => {
  console.log(`Server on port test 1 ${config.port}`);
});

// this is just for test 
app.get("/",(_req:express.Request,res:express.Response):void=>{
  res.json({
    status:"success",
    messsage:"this just a test route."
  });
})


// return 404 for unhandeled routes.
app.use((_req:express.Request,res:express.Response):void=>{
  res.status(404).json({
    status:"falid",
    messsage:"we can't found that request."
  });
})
