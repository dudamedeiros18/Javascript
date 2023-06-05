function BotaoLogin()
var usuario = document.getElementById("nome").value
var senha = document.getElementById("usuario").value

if (nome =="adm" && senha == "123" ) {
    document.getElementById("resultado").innerHTML =
    `<b class="verde"> seja bem vindo ${nome},voce validou e em`
}else {
  document.getElementById("resultado").innerHTML =
    `<b class="vermelho">usuario ou senha invalido</b>`  |
}
