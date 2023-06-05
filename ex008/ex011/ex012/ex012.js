var nrSorteado = parseInt(Math.random() * 100) +1
//Receber numero
function BotaoNumero(){
    var numero = prompt("digite um numero")
if(numero == nrSorteado){
    document.getElementById("resultado").innerHTML += `Parabéns voce acertou`
}
   
    }