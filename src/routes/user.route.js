const express = require("express");
const router = express.Router();
const { getStart, getAllUsers, getUserById } = require("./card/card");
// const { createUser, deleteUser, updateUser, SendEmail } = require("./post");

// CRUD routes
router.get("/", getStart); // user
router.get("/user", getAllUsers); // Get all users
router.get("/user/:id", getUserById);
// router.post("/user", createUser); // post single user
// router.post("/send-email", SendEmail); // send email
// router.delete("/user/:id", deleteUser); // Delete user
// router.put("/user/:id", updateUser); // Update user


module.exports = router;
