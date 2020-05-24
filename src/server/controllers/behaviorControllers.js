const mysql = require("mysql");
const pool = require("../sqldatabase/dbconnect");
const { handleDataBaseError } = require("../sql/error");

const getAllBehaviors = (req, res) => {
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
  getAllRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe,
};
