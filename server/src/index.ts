import {config} from "./config/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db";
import UserRouter from "./routes/userRouts";
import accountRouter from "./routes/account"


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

app.use("/api/accounts", accountRouter);

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

app.use("/user",UserRouter)

// return 404 for unhandeled routes.
app.use((_req: express.Request, res: express.Response) => {
  res.status(404).json({
    status: "falid",
    messsage: "we can't found that request.",
  });
});

