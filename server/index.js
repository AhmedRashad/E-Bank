require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

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

// New
app.use(express.static(path.join(__dirname + "/public")));

app.get("*", (req, rse) => {
  rse.sendFile(path.resolve(__dirname + "/public/index.html"));
});
// New

app.listen(port, () => {
  console.log(`Server on port ${port}`.yellow.bold);
});
