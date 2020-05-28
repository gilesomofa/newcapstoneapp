// const data = require("../../../src/behaviorState/nonPreferredBehaviors.json");
const pool = require("../sql database/dbconnect");
const { handleDataBaseError } = require("../sql database/dberrors");

// const getAllStudentsById = (req, res)
//remember that when you want to connect student to teacher, connect student with teacher's 'insertId'

const getAllStudents = (req, res) => {
  pool.query("SELECT * FROM behavior_app_sql_db.students", (err, rows) => {
    if (err) {
      return handleDataBaseError(res, err);
    }
    res.json([...rows]);
  });
};

const createNewStudent = (req, res) => {
  const {
    student_id,
    student_firstname,
    student_lastname,
    student_preferred_behavior,
    student_non_preferred_behavior,
    student_behavior_comment,
    classroom_id,
  } = req.body;

  pool.query(
    "INSERT INTO behavior_app_sql_db.students (student_firstname, student_lastname, classroom_id) VALUES('" +
      student_firstname +
      "' , '" +
      student_lastname +
      "' , " +
      classroom_id +
      ") ",
    (err, rows) => {
      res.send(row);
    }
  );
};

module.exports = { getAllStudents, createNewStudent };
