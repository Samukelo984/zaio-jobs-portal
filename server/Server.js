const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// BODY PARSER --- MIDDLEWARE
app.use(express.json());

// ROUTE IMPORTS & USE
const jobRoutes = require("./routes/JobRoute");

app.use("/jobs", jobRoutes);

// DB CONNECTION AND PORT LISTENING
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
