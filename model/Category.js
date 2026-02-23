const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
<<<<<<< HEAD
  categoryname: { type: String,
  required: [true,"Enter the categoryname"]}
}, { timestamps: true });
=======
  categoryname: { type: String, required: [true ,"please enter categoryname"] }
});
>>>>>>> bd3a73e1234e6cdc52754e0c571ec5cf7993bad1

module.exports = mongoose.model("Category", categorySchema);

