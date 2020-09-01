const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const getStudentsRouter = require("./src/Backend/server/routes/index");
const teachersRouter = require("./src/Backend/server/routes/teacherRoutes");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(express.json());
app.get("/get", (req, res) => {
  res.send("por favor");
}),
  // app.use("/admin", getStudentsRouter);
  app.use("/", teachersRouter);

app.listen(port, () => console.log(`${port} app is running`));
