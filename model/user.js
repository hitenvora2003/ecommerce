// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
     type: String,
     required: [true, 'Please enter your Emailid'],
     unique: [true,'Email already exists. Please use a different one.']
     
    },
   password: {
        type: String,
        required: [true, 'please enter your password'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
 
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);
