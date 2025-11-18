const express = require("express");
const userRoutes = express.Router();
const { getAllCard, getCardById } = require("./card/card");
const { createCard, deleteUser, updateUser } = require("./card/add.card");

// CRUD routes
// userRoutes.get("/", getStart); // users
userRoutes.get("/", getAllCard); // Get all users
userRoutes.get("/user/:id", getCardById);
userRoutes.post("/card", createCard); // post single user
userRoutes.delete("/user/:id", deleteUser); // Delete user
userRoutes.put("/user/:id", updateUser); // Update user


module.exports = userRoutes;
