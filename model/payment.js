// models/Payment.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
<<<<<<< HEAD
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  method: { type: String, enum: ["COD", "CreditCard", "UPI"], default: "COD" },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  transactionId: String
},{ timestamps: true });
=======
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: [true , "please enter orderId"] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: [true , "please enter user"] },
  method: { type: String, enum: ["COD", "CreditCard", "UPI"], default: "COD" },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Payment", paymentSchema);
