function teste() {
  const tabela = [{ frases: "" }];
  const array = [];
  let text = document.getElementById("texto").value;
  let list = document.getElementById("lista").innerHTML;
  // console.log(array.length);

  if (text === "") {
    alert("Insira um valor no campo");
  } else {
    // list = +list + "<li>" + text + "</li>" // é a var mais o que vai ser digitado
    list += "<li>" + text + "</li>";

    document.getElementById("lista").innerHTML = list;
    document.getElementById("texto").value = null;

    const listaArray = list.map((array) => tabela.frases);
    console.log(listaArray);
  }
}

// colocar arrry
// fazer um map adicionando valores dentro do array
// toda vez que passar um map, adiciona um valores
