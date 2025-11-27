require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { getDB, connectDB } = require("./src/db");
const app = express();
const cardRoutes = require("./src/routes/user.route");
// Is used if my project is runing in 5000 with
// the help of this i can use 3000 also 
const cors = require('cors');


const PORT = process.env.PORT;
const HOST = "127.0.0.1";
// server.js ya index.js mein sabse upar add karo

// app.use(cors()); // ← Yeh line daal do bas!

// Ya agar sirf specific domain allow karna hai to:
app.use(cors({
   origin: [
      "https://ecommercewebhf.vercel.app",
      "https://ecommercewebhf.vercel.app/card",
      "http://localhost:3000",
      "http://localhost:5000"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  }));    
// https://ecommercewebhf.vercel.app/

// Middleware
app.use(bodyParser.json());

// Routes "/" is important 
app.use("/", cardRoutes);
app.use("/card", cardRoutes);
app.use("/card/:id", cardRoutes);

// Server start krne k liye
const startServer = async () => {
  await connectDB();
  // const db = await getDB();
  app.listen(PORT, HOST, () => {
    console.log(`app is running on , and ${HOST}:${PORT}`);
  });
};

startServer();

