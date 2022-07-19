class Produto {
  constructor() {
    this.id = 0;
    this.arrayProdutos = [];
  }

  salvar() {
    this.lerDados();
    if (this.validaCampos(produto) == true) {
      // alert("salvar");
      this.adicionar(produto);
    }

    console.log(this.arrayProdutos);
  }
  
  adicionar(produto) {
    this.arrayProdutos.push(produtos);
    this.id++;

  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("produto").value;
    produto.preco = document.getElementById("preco").value;
    return produto;
  }

  validaCampos(produto) {
    let msg = "";
    if (produto.nomeProduto == "") {
      msg += "- Informe o nome do produto \n";
    }
    if (produto.preco == "") {
      msg += "- Informe o valor do produto \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }

  excluir() {
    alert("excluir produto");
  }
}

var produto = new Produto();
