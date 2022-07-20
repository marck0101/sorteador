text;
list;
limp;
array;

function adicionar() {
  let text = document.getElementById("texto").value;
  let list = document.getElementById("lista").innerHTML;
  const original = [];
  const listaSorteada = [];
  // console.log(array.length);

  if (text === "") {
    alert("Insira um valor no campo");
  } else {
    original.push(text);
    console.log(original);

    // list = +list + "<li>" + text + "</li>" // é a var mais o que vai ser digitado
    list += "<li>" + text + "</li>";

    document.getElementById("lista").innerHTML = list;
    document.getElementById("listaInvisivel").innerHTML = list;

    document.getElementById("texto").value = null;
  }
}

function mae() {
  adicionar();
}
