const express = require("express");
const PORT = 8000;
require("dotenv").config();
const app = express();
// DB
const db = require("./util/database");

//Routes
const userRouter = require("./routes/userRouter");

//Middleware
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);

db.connect()
  .then((res) => {
    console.log("Connected to PostgresSQL DB");
    app.listen(PORT, () => {
      console.log(`Running on server ${PORT}`);
    });
  })
  .catch((err) => console.log("Error connecting to DB", err));

// Models are the DB queries just return the Data
// Controllers are the req,res then res.send whatever you need
// Routes are just the routes and calling the controller functions

//find practice project
