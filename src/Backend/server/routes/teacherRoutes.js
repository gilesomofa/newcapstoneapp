const  express = require("express");
const router = express.Router();
const { signUp, login } = require('../controllers/teacherController')

router.post("/", signUp );

router.post("/login", login );

module.exports = router