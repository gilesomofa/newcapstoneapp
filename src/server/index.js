const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const studentRoutes = require("./routes/studentRoutes");
const behaviorRoutes = require("./routes/behaviorRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(proceSS.env.PORT, () => console.log("app is running"));
