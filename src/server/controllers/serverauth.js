const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// // for bcrypt I used 100 to increase security since students are minors and the program is federally
//protected It's best to be as secure as possible without comprimising user experience
const saltRounds = 100;

const signup = (req, res) => {
  const {
    teacher_firstname,
    teacher_lastname,
    teacher_email,
    teacher_password,
    teacher_pin,
  } = req.body;
  let sql =
    "INSERT INTO teachers (teacher_firstname, teacher_lastname, teacher_email, teacher_password, teacher_pin) VALUES (?, ?, ?, ?, ?)";

  bcrypt.hash(password, saltRounds, function (err, hash) {
    sql = mysql.format(sql, [email, hash]);

    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY")
          return res
            .status(409)
            .send("There is already an account associated with this email");
        return handleSQLError(res, err);
      }
      return res.send("Thanks for becoming a part of the Daily Sped community");
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  let sql = "SELECT * FROM teachers WHERE email = ?";
  sql = mysql.format(sql, [email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send("No matching users");

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send("Invalid password");

      const data = { ...rows[0] };
      data.password = "REDACTED";

      const token = jwt.sign(data, "secret");
      res.json({
        msg: "You have successfully logged in, Enjoy Using the App!",
        token,
      });
    });
  });
};

module.exports = {
  signup,
  login,
};
