const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

// const studentRoutes = require("./src/server/routes");
// const behaviorRoutes = require("./src/server/routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(port, () => console.log("app is running"));
