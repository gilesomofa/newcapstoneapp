const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const getStudentsRouter = require("./src/server/routes/index");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/", getStudentsRouter);

app.listen(port, () => console.log(`${port} app is running`));
