const express = require("express");

const auth = require("../middleware/auth");
const {
  addPassword,
  getPasswords,
} = require("../controllers/passwordController");

const router = express.Router();

router.post("/", auth, addPassword);
router.get("/", auth, getPasswords);

module.exports = router;
