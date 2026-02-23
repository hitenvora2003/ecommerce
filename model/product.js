const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
<<<<<<< HEAD
  productname: String,
  price: Number,
  stock: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
}, { timestamps: true });
=======
  productname: {
    type : String,
    required : [true , "please enter productname"]
  },
  price: {
    type : Number,
    required : [true , "please enter price"]
  },
  stock: {
    type : Number,
    required : [true , "please enter stock"]
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category",
      required : [true , "please enter categoryId"]
   }
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Product", productSchema);
