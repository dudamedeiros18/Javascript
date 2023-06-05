 /*
        comentários em multiplas linhas 
        */
       // comentário em uma unica linha ´

       //o alert é utilizado para exibir uma nova mensagem em popup
       alert("Olá mundo!!!")

       //No Console conseguimos visalizar informações
       // Semexibir na página
       console.log( "Olá mundo utilizando console!")

      function BotaoTeste() {
         alert("Voce clicou no botão")
       }

       //tipo de exibição de mensagem no console
       console.error("Esta é a mensagem de erro")
       console.warn("Esta é a mensagem de alerta")
       console.info("Esta é a mensagem de informação")


       //Declarando variáveis
       //String- Conjunto de caracteres - Declara com "" ou "
       var nome = "Maria Eduarda"
       var sobrenome = "Nogueira"
       //Number - Todo número  em JS é do tipo Number - Declarar sem ""
       var idade = 16
       //Boolean -Somente receba tru ou false
       var aprovado = true

       console.log (typeof nome) //comando typeofpara saber o tipo do dado

       console.log (nome + ' ' + sobrenome) //Concatenando strings com o +
       //Se utilizarmos o + com string ele concatena se utilizar com number soma
       var n1 = 10
       var n2 = 25
       console.log(n1 + n2)//Irá somar as 2 variáveis number (35)
       var n3 = "10"
       var n4 = "25"
       console.log(n3 + n4)//Irá concatenar "juntar" as 2 vaiáveis (1025)
       
       n1 = n2//Uma variável pode receber o valor de outra variável 
       console.log("n1 = " + n1 + ' e o n2 = ' + n2)
       
       var salario = 1290.85 //Para atribuir um valor decimal utilizar . não ,
       salario = salario + 200 //Posso também somar a variável com ela mesmo
       console.log(salario)
       salario += 200 //Representação mais simplificada de expressão acima
       console.log(salario)
       
       //Antigamente para juntar texto e variáveis faziamos assim 
       console.log('Olá, ' + nome + ' voce tem' + idade + 'anos e recebe R$ ' + salario)
       //hoje utilizamos o TemplateString forma mais simples 
       console.log(`Olá, ${nome} voce tem ${idade} anos e recebe R$ ${salario}`)
         
       //Função no Botão para obter o nome
         58
       
        
        //Função do botão para obter a soma
        function BotaoSomar()
        {
           //Receber valor1 de um prompt
           var valor1 = prompt ( " Informe o valor 1:" )
           //Receber valor2 de um prompt
           var valor2 = prompt( "Informe o valor 2: ")
           //Variável soma receber valor1 + valor2
           var soma = valor1 + valor2
           //Exibir em um alert o valor de soma 
           //alert(soma)//"1010"
           //Alterando o elemento buscando ele pelo ID e alterando
           //o conteúdo HTML, podemos ler da seguinte forma
           //No documento pegar o elemento pelo ID resultadoSoma e
           //Alterar o conteúdo HTML pela string
           document.getElementById("resultadoSoma").innerHTML += 
           `<br> A soma dos números ${valor1} e ${valor2} é = ${soma}`

        }

        function BotaoCidade() {
           var nomeCidade = document.getElementById("cidade").value
           document.getElementById("resultadoCidade").innerHTML = nomeCidade
    }

    //Operadores Aritméticos e Ordem de procedencia
    var opSoma = 5 + 2 //Operador de soma +
    console.log(opSoma)
    var opSubtracao = 5 - 2 //Operador de Subtração
    var console.log(opSubtracao)
    var opMultiplicacao = 5 * 2 //Operador de Multiplicação
    console.log(opMultiplicacao)
    var opDivisao = 5 / 2 //Operador de Divisão /
    console.log(opDivisao)

    var opExponenciacao = 5 ** 2 //Operador de exponenciação **
    console.log(opExponenciacao)
    var opResto = 5 % 2 //Operador de resto da divisão %
    console.log(opResto)
    
    //Ordem de precedencia
    var ordemPrecedencia1 = 5 + 3 / 2
    console.log(ordemPrecedencia1) // 6.5
    var ordemPrecedencia2 = (5 + 3) / 2
    console.log(ordemPrecedencia2) // 4
    /* 1º()
       2º **
       3º * /
       4º %
       5º + -
 */

       //Constantes
       const pi = 3.14
       // pi = 3 - Se o valor for alterado dará erro no javascript

       //Auto atribuição
        var n = 3
        n = n + 3 // a variável recebe ela mesmo 
        n += 3  // quer dizer o mesmo que a expressão acima
        n++


        console.log(n1 > n2) // > Maior que
        console.log(n1 < n2) // < Menor que
        console.log(n1 >= n2) //>= Maior ou igual que
        console.log(n1 <= n2) // <= Menor ou igual que 
        console.log(n1 == n2) // == igual 
        console.log(n1 != n2) // != Não igual - Diferente

        //Estruturas condicionais 
        if (n1 > n2){
          // Se a condição for verdadeira "entra" nesse bloco
          console.log("O n1 é maior que o n2")
        } else {
           //Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
           console.log("O n1 não é maior que o n2")
        }
        //Exemplo de condição
          var minhaIdade = 15
          if (minhaIdade >= 16){
              console.log("Voce pode votar")
          }else {
            console.log("voce NÃO pode votar")
          }
        
         //Operadores lógicos
         //&& representa o E
         var login = "adm"
         var senha = "123"
         //Para entrar na condição TRUE as 2 condições precisa se verdadeira
         if(login == "adm" && senha == "123"){
             //Executa esse bloco quando as condições são TRUE
         }else {
             //Executa esse bloco se pelo menos 1 condição dor FALSE
         }

         var media = 6
         //Operador OU -> || (pipe)
         //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdade
         if(media == 6 || media == 5){
            //Executa esse bloco quando 1 condição é TRUE pelo menos
         }else{
            //Aqui entra se todas as condições forem falsas 
         }

         //Estruturas condicionais encadeadas 
         if(media>= 7){
            console.log("APROVADO")
         } else if(media >= 5) {//Podemos fazer um novo if junto com else
             console.log("RECUPERAÇÃO")
         } else if(media < 5){
          console.log("REPROVADO")
         }
         //Para sortearmos um valor aleátorio utilizamos o Math.random()
         //o Math.random retorna um número decimal e precisamos multiplica
         //pelo nr máximo que desejamos e somar 1 quando necessário
         //o parseInt utilizamos para obter apenas a parte inteira do número
         var nrSorteado = parseInt(Math.random() * 100) +1
         console.log(nrSorteado)

         var diaSemana = 1
         switch (diaSemana) {
          case 1: console.log("hoje é:domingo")
         break
         case 2: console.log("hoje é: segunda")
         break
         case 3: console.log("hoje é: terça")
         break
         case 4: console.log("hoje é: quarta")
         break
         case 5: console.log("hoje é: quinta")
         break
         case 6: console.log("hoje é: sexta")
         break
         case 7: console.log("hoje é: sabado")
         break
         default:
            console.log("dia invalido")
         }

         //laços de repetição WHILE (que quer dizer enquanto)
         //while (condição)
         //enquanto a condição do parenteses for verdadeira
         //continua repetindo o código de bloco
         var nrVidas = 5
         while(nrVidas > 0){
            console.log(`Voce ainda tem ${nrVidas}`)
            nrVidas--
         }

         //Verificando se número é par com while
         var contador = 1 //Iniciando o contador de vezes que irá executar
         while (contador <= 10){ //Enquanto a condição for verdadeira
         if(contador % 2 == 0){ //Condição para o contador for par
         console.log(`${contador} é par`)
         }else{
            console.log(`${contador} é impar`)
         }
         contador++ //Adicionamos +1 ao contador para não ficar em loop
         }

         var cont = 1
         while(cont <= 5){
            console.log(cont)
            cont++
         }
          for(var cont = 1; cont <= 5; cont ++){
            console.log(cont)
          }

          for(let i = 1; i <= 10; i++){
            console.log(i)
          }




     


