const { connectDB } = require("../../db");
const { ObjectId } = require("mongodb");

const getStart = async (req, res) => {
  try {
    res.send("Started Server Working fine");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "<--- Internal Server Error --->" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const db = await connectDB();
    const users = await db.collection("user").find().toArray();
    res.status(200).json({ user: ">---->", data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userObjectId = new ObjectId(id);
    const db = await connectDB();
    const condition = { _id: userObjectId };
    const data = await db.collection("user").findOne(condition);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "<--- Internal Server Error --->" });
  }
};

module.exports = { getAllUsers, getStart, getUserById };
