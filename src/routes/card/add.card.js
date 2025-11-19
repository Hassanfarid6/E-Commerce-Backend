const express = require("express");
const { connectDB, getDB } = require("../../db");
const { ObjectId } = require("mongodb");
const { Card } = require("../../schema/card.schema")
const { cardValidation } = require("../../validations/card.validation");

const createCard = async (req, res) => {
  try {
    const cards = {
      ...req.body,
    };
       // Validate input
    const { error } = cardValidation.validate(cards);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    // const newCard = new Card(cards);
    // const saveCard = await newCard.save();    
    const db = await getDB();
    // Data insert krtaa hai Ya add Krtaa hai
    await db.collection("card").insertOne(cards);
    // app.use(express.json());
    res.status(201).json({massage: "Card is Created", data: cards });

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
    await db.collection("cards").deleteOne(condition);
    res.status(200).json({ data: id, message: "Your cards has been deleted" });
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
    const existingUser = await db.collection("cards").findOne(condition);

    const newPayload = {
      ...existingUser,
      ...payload,
    };

    await db.collection("cards").updateOne(condition, { $set: newPayload });
    // updateMany

    res
      .status(200)
      .json({ data: newPayload, message: "Your cards has been updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "<--- Internal Server Error --->" });
  }
};


module.exports = { createCard, deleteUser, updateUser};
