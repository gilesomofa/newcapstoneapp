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
