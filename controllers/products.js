const connection = require("../db/connection");

function getFormattedDate() {
  const date = new Date();

  // Obter os componentes da data
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam de 0 a 11
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Montar a string no formato YYYY-MM-DD HH:MM:SS
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}
class Produtos {
  cadastrarProduto(req, res) {

    const produtoCadastrado = { ...req, date: getFormattedDate() };

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
