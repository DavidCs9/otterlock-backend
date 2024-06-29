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
