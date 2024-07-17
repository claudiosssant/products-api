const express = require("express");


const app = express();
const port = 2000;

app.listen(port, () => {
  console.log("Servidor rodando")
});

app.get('/', (req, res) => {
  res.status(200).json({"message": "Funcionou"})
});