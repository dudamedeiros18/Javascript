
function BotaoVerificar(){
  var nome = document.getElementById("nome").value
  var idade =document.getElementById("idade").value

  if(Number(idade) >= 100){
    document.getElementById("resultado").innerHTML =
      "Melhor não dirigir"
  }

  if(Number(idade) >= 18){
    document.getElementById("resultado").innerHTML =
      `<b class="aprov">PARABÉNS ${nome},voce pode tirar CNH</b>
      <img src="cnh.jpg">` 
  }else {
    document.getElementById("resultado").innerHTML =
    `<b class="repr">RARABÉNS ${nome},voce NÃO pode tirar CNH</b>
    <img src="cnh-nao.jpg">`
  }

}

