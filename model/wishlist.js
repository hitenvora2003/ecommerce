
const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
<<<<<<< HEAD
      required: true 
=======
      required: [true, "please enter user"] 
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: "Product"
      }
    ]
  },
   { timestamps: true }
=======
        ref: "Product",
        required: [true, "please enter products"] 
      }
    ]
  }
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

);

module.exports = mongoose.model("Wishlist", wishlistSchema);
