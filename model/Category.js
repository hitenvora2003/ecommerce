const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryname: { type: String,
  required: [true,"Enter the categoryname"]}
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);

