const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const config = require('config')
const dotenv = require("dotenv");
const connectDB = require("./mongo/db");
dotenv.config({ path: "./config.env" });
const getStudentsRouter = require("./routes/index");
const teachersRouter = require("./routes/teacherRoutes");

const cors = require("cors");

const app = express();
//connect Mongo DB
connectDB();
const port = process.env.PORT || 5000;
console.log('eureka balzac')

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
  app.use("/admin", getStudentsRouter )
  app.use("/", (req,res) => {
    res.json({msg:"this is where your cognots should be entering"});});

app.listen(port, () => console.log(`${port} app is running`));
