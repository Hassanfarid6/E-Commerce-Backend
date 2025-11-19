const mongoose = require("mongoose");
const { Schema } = mongoose;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    sku: {
      type: String,
      unique: true,
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    image: {
      type: String, // URL of the image
      default: "",
      required: true
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);
module.exports = { Card }

