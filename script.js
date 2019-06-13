const bomdia = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");

function abrirMenu(){
// if(lista.classList.contains("ativo")){
//     lista.classList.remove("ativo");

// }else{
//     lista.classList.add("ativo");
// }

// }

lista.classList.toggle("ativo");
}

function rodaaroda(){
    roleta.classList.toggle("roda-jequiti");
}

bomdia.onclick = abrirMenu;
roleta.onclick = rodaaroda;
