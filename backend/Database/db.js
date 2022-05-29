const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/pets4home", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Db connected successfully");
  })
  .catch((error) => {
    console(error);
  });
