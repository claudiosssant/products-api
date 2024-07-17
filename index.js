const express = require("express");
const connection = require("./db/connection");
const table= require('./db/table');



const app = express();
const port = 2000;



connection.connect(erro => {
  if (erro) {
    console.log(erro.message);
  }else{
    table.init(connection);

    app.listen(port, () => {
      console.log(`Rodando ${port}`)
    })
    
    app.get('/', (req, res) => {
      res.status(200).json({"message":"Server is running"})
    })
  }
})