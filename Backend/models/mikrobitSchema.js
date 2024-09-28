const mongoose = require("mongoose");

const mikrobitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Mikrobit = mongoose.model("Mikrobit", mikrobitSchema);
module.exports = Mikrobit;
