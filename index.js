const express = require("express");
const connection = require("./db/connection");
const table = require("./db/table");
const routes = require("./routes/product-routes");

const app = express();
const port = 2000;

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
