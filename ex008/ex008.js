//Receber o nome do aluno
function BotaoMedia(){
var nome = document.getElementById("aluno").value
var nota = document.getElementById("nota").value
var nota2 = document.getElementById("nota2").value

var calcularMedia = (Number(nota)+Number(nota2))/2
if(calcularMedia >= 7){
 document.getElementById("resultado").innerHTML = `O aluno ${nome} tirou nota ${nota} e nota2 ${nota2} e teve media ${calcularMedia} e <strong> passou de ano</strong> `
}else{
    document.getElementById("resultado").innerHTML = `O aluno ${nome} tirou nota ${nota} e nota2 ${nota2} e teve media ${calcularMedia} e <strong> não passou de ano</strong> `
}

}
 

