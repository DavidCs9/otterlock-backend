const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const passwordRoutes = require("./routes/passwordRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear el body
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/passwords", passwordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
