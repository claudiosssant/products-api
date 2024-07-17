class tabela{
  init(connection){
  this.connection = connection;
  this.listaProdutos();
}

listaProdutos() {
  const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, name varchar(50), price decimal(6, 2), description varchar(400) NOT NULL, data datetime NOT NULL, PRIMARY KEY(ID))';
  this.connection.query(sql, (erro, retorno) =>{
    if(erro) {
      console.log(erro);
    }else{
      console.log(retorno);
    }
  })
}
}

module.exports = new tabela();