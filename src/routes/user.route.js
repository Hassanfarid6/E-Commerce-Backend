const express = require("express");
const router = express.Router();
const { getStart, getAllCard, getCardById } = require("./card/card");
const { createCard, deleteUser, updateUser } = require("./card/add.card");

// CRUD routes
router.get("/", getStart); // users
router.get("/card", getAllCard); // Get all users
router.get("/user/:id", getCardById);
router.post("/user", createCard); // post single user
router.delete("/user/:id", deleteUser); // Delete user
router.put("/user/:id", updateUser); // Update user


module.exports = router;
