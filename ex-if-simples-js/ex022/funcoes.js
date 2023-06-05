var resultado = 0

function calcularDobro(nr){
var dobro = nr * 2
return dobro
}

ricardoCalculeTabuada(3)//Douglas
ricardoCalculeTabuada(9)//Maria Fernada
ricardoCalculeTabuada(240)//Guilherme Lima

function ricardoCalcularTabuada(nr){
    for(var i = 1; i <= 20; i++){
    console.log(`${nr} x ${i} = ${nr*i}`)
}
}

//Chamando função para calcular o dobro e receber o resultado na variável
var resultado
resultado = calcularDobro(544075)//Douglas
console.log(resultado)

//Declarando a função recebendo o paramento e retornando um valor
function calcularDobro(nr){//Ricardo
    var dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculando para a chamada

}

//Criando uma função e recebendo 2 valores e retornando a média
function calcularMedia(nota1, nota2)
var soma = nota1 + nota2
var media = soma / 2
return media
{
    //Chamando a função de calcular media
    var mediaAluno1 = calcularMedia(9,7)
    console.log(`Media do aluno 1 é ${mediaAluno}`)
    var mediaAluno2 = calcularMedia(5,3)
    console.log(`Media do aluno 2 é ${mediaAluno}`)
}

var login = 'admin'
var senha = '123'
var possoAcessar = validarLogin(login,senha)

function validarLogin(login,senha) {
    if(login == '' || senha == ''){
        return false
    }
    if(login == 'admin' && senha == '123'){
        return true
    }else{
        return false
    }
}

