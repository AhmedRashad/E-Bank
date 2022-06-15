require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

require("colors");

const conectarDB = require("./config/db");
const port = process.env.PORT || 5000;

const user = require("./routes/user");
const account = require("./routes/account");

conectarDB();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use("/users", user);
app.use("/accounts", account);

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server on port ${port}`.yellow.bold);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
