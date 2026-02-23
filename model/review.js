// models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
<<<<<<< HEAD
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String
}, { timestamps: true });
=======
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: [true ,"please enter productId"] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: [true ,"please enter userId"] },
  rating: { type: Number, min: 1, max: 5, required: [true ,"please enter rating"] },
  comment: String
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Review", reviewSchema);
