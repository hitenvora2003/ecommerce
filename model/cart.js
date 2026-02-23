// models/Cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
<<<<<<< HEAD
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId, ref: "Product"
=======
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User",
  required: [true, 'Enter user']
    },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId, ref: "Product",
         
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

      },
      quantity: { type: Number, default: 1 }
    },
<<<<<<< HEAD

  ],
  totalPrice: { type: Number, default: 0 }
}, { timestamps: true });
=======
      
  ],
  totalPrice: { type: Number, default: 0 }
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Cart", cartSchema);
