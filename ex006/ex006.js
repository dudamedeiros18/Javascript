function BotaoSomar(){
    //Receber o valor1
    var valor1 = document.getElementById("valor1").value
    
    //Receber o valor2
    var valor2 =  document.getElementById("valor2").value
    
    //Calcular o quardar o valor da soma de valor1 e valor2 
    var soma = valor1 + valor2
    //Calcular e guardar o valor da subtração de valor1 e valor2
     var subtração = valor1 - valor2
    //Calcular e quardar o  valor da multiplicação de valor1 e valor2
     var multiplicacao = valor1 * valor2
    //...

    //Exibir todos os resultados no elemento do parágrafo
    document.getElementById("resultado").innerHTML = 
            `${valor1} + ${valor2} = ${soma}<br>
            `${valor1} - ${valor2} = ${subtracao}<br>
            ${valor1} * ${valor2} = ${multiplicacao}<br>`
}