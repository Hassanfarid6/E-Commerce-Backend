const express = require("express");
const { connectDB, getDB } = require("../../db");
const { ObjectId } = require("mongodb");
const { Card } = require("../../schema/card.schema")

const createCard = async (req, res) => {
  try {
    // const cards = {
    //   ...req.body,
    // };
    
    // const newCard = new Card(cards);
    // const saveCard = await newCard.save();
    // const db = await getDB();
    // // // // Data insert krtaa hai Ya add Krtaa hai
    // await db.collection("user").insertOne(saveCard);
    // app.use(express.json());
    // res.status(201).json({ data: saveCard });
    
    const user = {
      ...req.body,
    };
    const db = await getDB();
    // Data insert krtaa hai Ya add Krtaa hai
    await db.collection("card").insertOne(user);
    // app.use(express.json());
    res.status(201).json({ data: user });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "<--- Internal Server Error --->" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userObjectId = new ObjectId(id);
    const db = await connectDB();
    const condition = { _id: userObjectId };
    await db.collection("user").deleteOne(condition);
    res.status(200).json({ data: id, message: "Your user has been deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "<--- Internal Server Error --->" });
  }
};

// Update krne k liye  put method use hota hai
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const userObjectId = new ObjectId(id);
    const db = await connectDB();
    const condition = { _id: userObjectId };
    const existingUser = await db.collection("user").findOne(condition);

    const newPayload = {
      ...existingUser,
      ...payload,
    };

    await db.collection("user").updateOne(condition, { $set: newPayload });
    // updateMany

    res
      .status(200)
      .json({ data: newPayload, message: "Your user has been updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "<--- Internal Server Error --->" });
  }
};


module.exports = { createCard, deleteUser, updateUser};
