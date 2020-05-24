const express = require("express");
const router = express.Router();
const { getAllStudents } = require("../controllers/studentControllers");

//the following routes are being written with hopes of expanding features of app in future

router.get("/", getAllStudents);

module.exports = router;
