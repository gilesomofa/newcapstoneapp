const pool = require("../sql database/dbconnect");

const signUp = (req, res) => {
  res.json({signupcranked:req.body});
  const {
    teacher_id,
    teacher_pin,
    teacher_firstname,
    teacher_lastname,
    teacher_email,
    teacher_password
  } = req.body;

  pool.query(
    "INSERT INTO behavior_app_sql_db.teachers (teacher_pin, teacher_firstname, teacher_lastname, teacher_email, teacher_password) VALUES (" +
      teacher_pin +
      " , '" +
      teacher_firstname +
      "', '" +
      teacher_lastname +
      "' , '" +
      teacher_email +
      "', '" + teacher_password + "')",
    (err, rows) => {
      res.json({user:rows.insertId});
    }
  );
};

const login = (req, res) => {
  res.json({ loginworks: req.body });
  const {
    teacher_email,
    teacher_pin,
    teacher_password
  } = req.body;

pool.query("SELECT * FROM teachers WHERE teacher_email = '" + teacher_email + "'  AND teacher_pin = '" + teacher_pin + "'",(err, rows) => {
  res.send("hello world");
} 
);
};

module.exports = { signUp, login };
