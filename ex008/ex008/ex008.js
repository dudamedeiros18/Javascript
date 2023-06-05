function Calcular(){
    var nome = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value

    if(validarNotas(nota1,nota2) == false)
       return

    var media = calcularMedia(nota1,nota2)

    exibirAprovação(media)
}

