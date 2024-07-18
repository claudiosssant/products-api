const express = require("express");
require('dotenv').config();
const connection = require("./db/connection");
const table = require("./db/table");
const routes = require("./routes/product-routes");

const app = express();
const port = process.env.PORT_EXPRESS;

routes(app);

connection.connect((erro) => {
  if (erro) {
    console.log(erro.message);
  } else {
    table.init(connection);

    app.listen(port, () => {
      console.log(`Rodando ${port}`);
    });
  }
});
