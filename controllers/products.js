const connection = require("../db/connection");

class Produtos {
  cadastrarProduto(req, res) {
    const dataHoraAtual = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const produtoCadastrado = { ...req, data: dataHoraAtual };

    const sql = "INSERT INTO Produtos SET ?";

    connection.query(sql, produtoCadastrado, (erro, result) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ message: `Produto cadastrado com sucesso!` });
      }
    });
  }

  listarProduto(res) {
    const sql = "SELECT * FROM Produtos";

    connection.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  editarProduto(id, dados, res) {
    const sql = `UPDATE Produtos SET ? WHERE id = ${id}`;

    connection.query(sql, [dados, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ message: `O produto ${id} foi atualizado!` });
      }
    });
  }

  deletarProduto(id, res) {
    const sql = `DELETE FROM Produtos WHERE id = ${id}`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(500).json({ message: `Falha ao deletar produto!` });
      } else if (result.affectedRows == 0) {
        res
          .status(404)
          .json({ message: `Produto com o ID ${id}, não existe!` });
      } else {
        res.status(200).json({ message: `Produto ${id} foi apagado!` });
      }
    });
  }
}

module.exports = new Produtos();
