// server.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Base de datos "falsa"
const COMPUTERS = [
  {
    id: 1,
    name: "PC Oficina",
    cpu: "Intel i3",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrada"
  },
  {
    id: 2,
    name: "PC Gaming",
    cpu: "Ryzen 5",
    ram: "16GB",
    storage: "1TB NVMe",
    gpu: "RTX 3060"
  }
];

// API (backend → JSON)
app.get("/api/computers", (req, res) => {
  res.json(COMPUTERS);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
