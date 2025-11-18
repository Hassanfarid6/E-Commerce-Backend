require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { getDB, connectDB } = require("./src/db");
const app = express();
const userRoutes = require("./src/routes/user.route");


const PORT = process.env.PORT;
const HOST = "127.0.0.1";

// Middleware
app.use(bodyParser.json());

// Routes "/" is important 
app.use("/", userRoutes);
app.use("/user", userRoutes);
app.use("/card", userRoutes);

// Server start krne k liye
const startServer = async () => {
  await connectDB();
  // const db = await getDB();
  app.listen(PORT, HOST, () => {
    console.log(`app is running on , and ${HOST}:${PORT}`);
  });
};

startServer();

