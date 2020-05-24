const mysql = require("sql database");
const pool = require("../sql/connection");
const { handleDBError } = require("../sqldatabase/dberrors");

const getAllRecipes = (req, res) => {
  pool.query("SELECT * FROM RECIPE_DATA", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

app.get("/", (req, res) => {});

//create
app.post("/insert", (req, res) => {});

//read
app.get("/getAll", (req, res) => {});

//update
app.put("/update", (req, res) => {});

//delete
app.delete("/delete", (req, res) => {});

module.exports = {
  getAllTeachers,
  getTeacherById,
  getTeacherByBehaviorId,
  getTeacherByClassroomId,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};
