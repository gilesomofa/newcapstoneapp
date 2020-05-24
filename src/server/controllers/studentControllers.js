// const data = require("../../../src/behaviorState/nonPreferredBehaviors.json");
const pool = require("../sql database/dbconnect");

const getAllStudents = (req, res) => {
  pool.query("SELECT * FROM behavior_app_sql_db.students", (err, rows) => {
    res.json([...rows]);
  });
};

// const getAllStudentsById = (req, res)

const createNewStudent = (req, res) =>{
    const {student_id, student_firstname, student_lastname, student_preferred_behavior, student_non_preferred_behavior, student_behavior_comment, classroom_id} = req.body
    res.send(req.body)
    pool.query("INSERT INTO behavior_app_sql_db.students (student_firstname, student_lastname, classroom_id) VALUES('"+ student_firstname +"' , '"+ student_lastname +"' , "+ classroom_id +") ", (err, rows) =>{
      res.send(rows)
    })


  };



module.exports = { getAllStudents, createNewStudent };
