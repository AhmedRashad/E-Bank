require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();


const cors = require("cors");
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
  }
));

require("colors");


const conectarDB = require("./config/db");
const port = process.env.PORT || 5000;



conectarDB();

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));


app.use(express.static("public"));
app.listen(port, () => {
  console.log(`Server on port ${port}`.yellow.bold);
});
