require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./src/db");
const app = express();
const cors = require("cors");
const router = require("./src/routes/user.route");
// const { router: authRouter } = require("./router/auth.router");
// const { router: ticketRouter } = require("./router/ticket.router");

const PORT = process.env.PORT;
const HOST = "127.0.0.1";
app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(bodyParser.json());

app.use("/", router);
app.use("/user", router);
// app.use("/auth", authRouter);
// app.use("/ticket", ticketRouter);

app.get("/", (req, res) => {
  res.send("Working fine");
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, HOST, () => {
    console.log(`app is running on , and ${HOST}:${PORT}`);
  });
};

startServer();









// express-mongo-card-post.js
// Simple Express server with a POST route to save "card" data to MongoDB using Mongoose.
// Usage:
// 1) Create a .env file with: MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/dbname
// 2) npm install express mongoose dotenv body-parser cors
// 3) node express-mongo-card-post.js

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // for parsing application/json

// // --- Mongoose setup ---
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cards_db';

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1);
//   });

// // --- Card Schema & Model ---
// const cardSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   sku: { type: String, unique: true, sparse: true },
//   quantity: { type: Number, default: 1 },
//   createdAt: { type: Date, default: Date.now }
// });

// const Card = mongoose.model('Card', cardSchema);

// // --- Routes ---
// // Health check
// app.get('/', (req, res) => {
//   res.json({ ok: true, msg: 'API is running' });
// });

// // POST /cards - create a new card
// app.post('/cards', async (req, res) => {
//   try {
//     const { title, description, price, sku, quantity } = req.body;

//     // Basic validation
//     if (!title || typeof title !== 'string') {
//       return res.status(400).json({ error: 'Title is required and must be a string' });
//     }
//     if (price == null || typeof price !== 'number') {
//       return res.status(400).json({ error: 'Price is required and must be a number' });
//     }

//     // Create and save
//     const card = new Card({ title, description, price, sku, quantity });
//     const saved = await card.save();

//     return res.status(201).json({ message: 'Card saved', card: saved });
//   } catch (err) {
//     console.error('Error saving card:', err);
//     // Handle duplicate SKU error
//     if (err.code === 11000) {
//       return res.status(409).json({ error: 'SKU already exists' });
//     }
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

// // Optional: GET /cards - list cards (pagination simple example)
// app.get('/cards', async (req, res) => {
//   try {
//     const page = Math.max(1, parseInt(req.query.page) || 1);
//     const limit = Math.max(1, parseInt(req.query.limit) || 20);
//     const skip = (page - 1) * limit;

//     const [cards, total] = await Promise.all([
//       Card.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
//       Card.countDocuments()
//     ]);

//     res.json({ cards, total, page, limit });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

/*
Sample cURL to POST a card:

curl -X POST http://localhost:3000/cards \
  -H "Content-Type: application/json" \
  -d '{"title":"Sample Card","description":"Test","price":19.99,"sku":"CARD001","quantity":2}'


Notes:
- For production, use environment variables, proper error handling, request sanitization, and consider adding authentication (JWT/API key).
- You can extend the schema with images array, categories, or nested objects as needed.
*/
