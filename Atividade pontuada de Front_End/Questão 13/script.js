function mudarCor(){

    let cor =
    "#" + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.background = cor;
}