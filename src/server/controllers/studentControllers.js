const data = require("../../../src/behaviorState/nonPreferredBehaviors.json");
const pool = require("../sql database/dbconnect");

const getAllStudents = (req, res) => {
  pool.query("SELECT * FROM behavior_app_sql_db.students", (err, rows) => {
    res.json([...rows]);
  });
};

module.exports = { getAllStudents };
