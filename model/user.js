// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
     type: String,
     required: [true, 'Please enter your Emailid'],
     unique: [true,'Email already exists. Please use a different one.']
     
    },
<<<<<<< HEAD
   password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
 
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
}, { timestamps: true });
=======
  mobile : { 
  type: Number,
  required: [true,"Please Enter your mobile no"]
 },
  password: { 
  type: String,
  required: [true,"Please Enter your password"]
 },
 
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("User", userSchema);
