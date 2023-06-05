function calcular()
var numero = document.getElementById("numero").value
for(var cont =1; cont <= numero; cont++){
    document.getElementById("resultado").innerHTML+= `<img src="coração.png"> `;
}
