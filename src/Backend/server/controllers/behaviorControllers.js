const mysql = require("mysql");
const pool = require("../sqldatabase/dbconnect");
const { handleDataBaseError } = require("../sql/error");

const getAllBehaviors = (req, res) => {
  pool.query("SELECT * FROM behavior_app_sql_db.students", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
const createNewBehavior = (req, res) => {
  const {
    behavior_id,
    behavior_type,
    behavior_name,
    behavior_comment,
    behavior_date,
    behavior_time,
    student_id,
    student_firstname,
    student_lastname,
    student_non_preferred_behavior,
    student_non_preferred_behavior,
    classroom_id,
    teacher_id,
  } = req.body;

  pool.query(
    "INSERT INTO behavior_app_sql_db.behaviors (behavior_firstname, behavior_lastname, classroom_id) VALUES('" +
      behavior_type +
      "' , '" +
      behavior_name +
      "' , " +
      student_firstname +
      "' , " +
      student_lastname +
      ") ",
    (err, rows) => {
      res.send(row);
    }
  );
};

module.exports = {
  getAllBehaviors,
  createNewBehavior,
};
