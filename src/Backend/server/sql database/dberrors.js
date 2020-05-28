const handleDataBaseError = (res, err) => {
  console.log("database Error: ", err);
  return res.status(500).send("An unexpected error occurred");
};

module.exports = { handleDataBaseError };