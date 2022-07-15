text;
list;
limp;
array;

function adicionar() {
let text = document.getElementById("texto").value;
let list = document.getElementById("lista").innerHTML;
let array = []
// console.log(array.length);

  if (text === "") {
    alert("Insira um valor no campo");
  } else {
    // list = +list + "<li>" + text + "</li>" // é a var mais o que vai ser digitado
    list += "<li>" + text + "</li>";

    document.getElementById("lista").innerHTML = list;
    document.getElementById("texto").value = null;
  }
}

// vai ter que limpar o innerHtml = list
// provavelmente criar uma nova var innerHtml = limp
function limpar(){
    limp += "<li>" + "<div> </div> " + "</li>";
    // list += "<li>" + "<div> </div> " + "</li>";

    document.getElementById("listaLimpa").innerHTML = list;
    // document.getElementById("texto").value = null;
}

function mae() {
  adicionar();
}
