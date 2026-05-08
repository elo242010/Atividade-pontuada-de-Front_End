let contador = 0;

function atualizar(){
    document.getElementById("numero").innerHTML =
    contador;
}

function aumentar(){
    contador++;
    atualizar();
}

function diminuir(){
    contador--;
    atualizar();
}

function zerar(){
    contador = 0;
    atualizar();
}