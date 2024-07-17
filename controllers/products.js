const connection = require('../db/connection');

class Produtos {
  

  cadastrarProduto(req, res) {
   
    const produtoCadastrado = {...req}

    const sql = 'INSERT INTO Produtos SET ?'

    connection.query(sql, produtoCadastrado, (erro, result) => {
      if(erro) {
        res.status(400).json(erro)
      }else{
        res.status(200).json({"message": `Produto cadastrado com sucesso!`})
      }
    })
  };

  listarProduto(res) {
    const sql = "SELECT * FROM Produtos"

    connection.query(sql, (erro, resultados) => {
      if(erro) {
        res.status(400).json(erro);
      }else{
        res.status(200).json(resultados);
      }
    })
  }
}

module.exports = new Produtos