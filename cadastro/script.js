class Produto {
  constructor() {
    this.id = 0;
    this.arrayProdutos = [];
    // this.nomeProduto = "";
    // this.valor = "";
  }
  adicionar() {
    alert("adicinar novo produto");
  }

  salvar() {
    this.lerDados();
    console.log(produto)
  }

  lerDados() {
    let produto = {}

    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value
    produto.preco = document.getElementById('preco').value
    return produto;
  }

  excluir() {
    alert("excluir produto");
  }
}

var produto = new Produto();
