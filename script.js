text;
list;

function adicionar() {
let text = document.getElementById("texto").value;
let list = document.getElementById("lista").innerHTML;

  if (text === "") {
    alert("Insira um valor no campo");
  } else {
    // list = +list + "<li>" + text + "</li>" // é a var mais o que vai ser digitado
    list += "<li>" + text + "</li>";

    document.getElementById("lista").innerHTML = list;
    document.getElementById("texto").value = null;
  }
}

function limpar(){
    list += "<li>" +""+ "</li>";
    
    document.getElementById("lista").innerHTML = list;
    document.getElementById("texto").value = null;
}

function mae() {
  adicionar();
}
