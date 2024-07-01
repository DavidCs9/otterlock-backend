const express = require("express");

const auth = require("../middleware/auth");
const {
  addPassword,
  getPasswords,
  deletePassword,
  updatePassword,
} = require("../controllers/passwordController");

const router = express.Router();

router.post("/", auth, addPassword);
router.get("/", auth, getPasswords);
router.delete("/:id", auth, deletePassword);
router.put("/:id", auth, updatePassword);

module.exports = router;
