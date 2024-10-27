require("dotenv").config();
require("express-async-errors");
const bodyParser = require("body-parser");
const cors = require("cors");
const webpush = require("web-push");
const path = require("path");
// const
// const webpush = require('web-push');
// const path = require('path');

const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const mainRouter = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.use(express.json());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// app.listen(9000, () => console.log('The server has been started on the port 9000'))
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

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(
  process.env.WEB_PUSH_CONTACT,
  publicVapidKey,
  privateVapidKey
);

app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;
  console.log(subscription);
  res.status(201).json({});

  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// app.get("/main.js", (req, res) => {
//   res.sendFile(__dirname + "/main.js");
// });
// app.get("/sw.js", (req, res) => {
//   res.sendFile(__dirname + "/sw.js");
// });
