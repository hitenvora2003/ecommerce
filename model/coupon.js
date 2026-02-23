// models/Coupon.js
const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: { type: String, unique: [true,"please enter unique coupon"],
     required: [true,'please enter code']
    },
  discountType: { type: String, enum: ["percentage", "fixed"], default: "percentage" },
  discountValue: { type: Number, 
    required: [true,'please enter discountValue']
  },
  expiryDate: { type: Date, default : Date.now,
<<<<<<< HEAD
  required: [true ,'please enter date']
 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });
=======
 
 },
  isActive: { type: Boolean, default: true }
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Coupon", couponSchema);
