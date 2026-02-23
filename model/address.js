// models/Address.js
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" 
  
  },
  street:{
    type : String,
    required : [true, "Please Enter your street"]
  },
  city: {
    type : String,
    required : [true, "Please Enter your city"]
  },
  state: {
    type : String,
    required : [true, "Please Enter your state"]
  },
  country: {
    type : String,
<<<<<<< HEAD
    required : [true, "Please Enter your state"]
=======
    required : [true, "Please Enter your country"]
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1
  },
  pincode: {
    type : String,
    required : [true, "Please Enter your pincode"]
  },
<<<<<<< HEAD
  phone: String,
  isDefault: { type: Boolean, default: false }
},{ timestamps: true });
=======
  phone: {
    type : String,
    required : [true, "Please Enter your phone."]
  },
  isDefault: { type: Boolean, default: false }
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Address", addressSchema);
