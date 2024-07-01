const Password = require("../models/Password");

exports.addPassword = async (req, res) => {
  const { site, encryptedPassword } = req.body;
  try {
    const password = await Password.create({
      site,
      encryptedPassword,
      userId: req.user.userId,
    });
    res.status(201).json(password);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPasswords = async (req, res) => {
  try {
    const passwords = await Password.find({ userId: req.user.userId });
    res.json(passwords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePassword = async (req, res) => {
  try {
    await Password.findByIdAndDelete(req.params.id);
    res.json({ message: "Password deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    await Password.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Password updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
