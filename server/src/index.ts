import {config} from "./config/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// what this lib do here ??
import colors from "colors";
import connectDB from "./config/db";

const app = express();

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
  console.log(`Server on port ${config.port}`.yellow.bold);
});

export default app;