const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    required: [true, 'enter user']
  },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalAmount: {
    type: Number,
    required: [true, 'enter totalamount']
  },

  status: {
<<<<<<< HEAD
    type: String, enum: ["pending", "shipped", "delivered"], default: "pending",

  }
},{ timestamps: true });
=======
    type: String, enum: ["pending", "shipped", "delivered"], 
    default: "pending",

  }
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Order", orderSchema);
