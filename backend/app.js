const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//defining the port for the backend
const PORT = 5000;

//importing the database
require("./Database/db");

//importing the routes
const userRoutes = require("./Routes/userRoute");
const googleRoutes = require("./Routes/googleRoutes");
app.get("/", (req, res) => {
  res.send("Hello Devs");
});

//creating the api path
app.use("/api/users", userRoutes);
app.use("/", googleRoutes);

//Running the server in the port
app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
