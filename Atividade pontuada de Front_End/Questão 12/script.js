function verificar(){

    let idade =
    document.getElementById("idade").value;

    if(idade >= 18){
        document.getElementById("resultado").innerHTML =
        "Maior de idade";
    }

    else{
        document.getElementById("resultado").innerHTML =
        "Menor de idade";
    }
}