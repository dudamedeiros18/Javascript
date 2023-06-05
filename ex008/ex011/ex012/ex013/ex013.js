function BotaoSortear(){
var nrSorteado = parseInt(Math.random() * 12) +1
switch (nrSorteado){
    case 1: document.getElementById("resultado").innerHTML = "mes: janeiro"
    break
    case 2: document.getElementById("resultado").innerHTML = " mes: fevereiro"
    break
    case 3: document.getElementById("resultado").innerHTML = "mes: março"
    break
    case 4: document.getElementById("resultado").innerHTML = "mes: abril"
    break
    case 5: document.getElementById("resultado").innerHTML = "mes: maio"
    break
    case 6: document.getElementById("resultado").innerHTML = "mes: junho"
    break
    case 7: document.getElementById("resultado").innerHTML = "mes: julho"
    break
    case 8: document.getElementById("resultado").innerHTML = "mes: agosto"
    break
    case 9: document.getElementById("resultado").innerHTML = "mes: setembro"
    break
    case 10: document.getElementById("resultado").innerHTML = "mes: outubro"
    break
    case 11: document.getElementById("resultado").innerHTML = "mes: novembro"
    break
    case 12: document.getElementById("resultado").innerHTML = "mes: dezembro"
    break
    default:
            console.log("mes invalido")
            break
}

}
   