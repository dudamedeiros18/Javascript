function sortear(){
var numero = 1
while(numero <=6){
    var nrSorteado = parseInt(Math.random() * 60) + 1
    document.getElementById("resultado").innerHTML += (`${nrSorteado}`)
    numero++
}
}
