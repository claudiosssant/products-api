class tabela {
  init(connection) {
    this.connection = connection;
    this.listaProdutos();
  }

  listaProdutos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, price decimal(6, 2) NOT NULL, description varchar(400) NOT NULL, data DATETIME NOT NULL, PRIMARY KEY(ID))";
    this.connection.query(sql, (erro, retorno) => {
      if (erro) {
        console.log(erro);
      }
    });
  }
}

module.exports = new tabela();
