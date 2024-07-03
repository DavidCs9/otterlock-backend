const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const passwordRoutes = require("./routes/passwordRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear el body
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Middleware para parsear el body
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/passwords", passwordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
