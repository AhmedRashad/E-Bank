import {config} from "./config/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db";

const accountRouter = require("./routes/account");

export const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
app.use(express.static("public"));
=======
app.use("/api/accounts", accountRouter);

>>>>>>> upstream/master
app.listen(config.port, () => {
  console.log(`Server on port ${config.port}`);
});

// this is just for test
app.get("/", (_req: express.Request, res: express.Response): void => {
  res.json({
    status: "success",
    messsage: "this just a test route.",
  });
});

// return 404 for unhandeled routes.
<<<<<<< HEAD
app.use((_req:express.Request,res:express.Response):void=>{
=======
app.use((_req: express.Request, res: express.Response) => {
>>>>>>> upstream/master
  res.status(404).json({
    status: "falid",
    messsage: "we can't found that request.",
  });
});

