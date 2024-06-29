const mongoose = require("mongoose");

const PasswordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Password", PasswordSchema);
