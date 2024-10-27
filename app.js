require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/user");

app.use(express.json());

app.use(cors());

// Add a basic route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Use your main router for /api/v1
app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
