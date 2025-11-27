const express = require("express");
const cardRoutes = express.Router();
const { getAllCard, getCardById } = require("./card/card");
const { createCard, deleteCard, updateCard } = require("./card/add.card");

// CRUD routes
// cardRoutes.get("/", getStart); // card
cardRoutes.get("/", getAllCard); // Get all card
cardRoutes.get("/card/:id", getCardById);
cardRoutes.post("/card", createCard); // post single user
cardRoutes.delete("/card/:id", deleteCard); // Delete card
cardRoutes.put("/card/:id", updateCard); // Update card


module.exports = cardRoutes;
