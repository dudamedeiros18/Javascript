function BotaoSomar(){
    //entrada
    var numero = document.getElementById("numero").value
    //processamento
    var dobro = numero * 2
    var metade = numero / 2
    //saída
    document.getElementById("resultado").innerHTML+=
     `*O dobro de ${numero} é ${dobro} e a metade é ${metade}<br>`
}
 function BotaoLimpar(){
    document.getElementById("resultado").innerHTML = ""
 }
