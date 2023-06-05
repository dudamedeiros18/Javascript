//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI,' 'true']

//Acessando dados de um vetor
console.log(nomes[1]) 
console.log( novoVetor[0] )

//Verificando o tamanho do vetor
console.log(nomes.lengeth)

//Indice        0         1         2        3        4
var frutas = ['Maça', 'Laranja', 'Pera', 'Morango', 'Uva']
for(var i=0; 1 < frutas.length; i++) {
    //Coloco o i no indice das frutas para pegar o
    //Valor de cada indice do vetor
    console.log(frutas[1])
}


//Adicionando novo valor no FINAL do vetor
frutas.push ('Abacaxi')
console.log (frutas.length)
console.log (frutas)

var novaListaFrutas = []
novaListaFrutas.push ('Limão')
console.log (novaListaFrutas)
novaListaFrutas.push ('Melancia')
console.log (novaListaFrutas)

for(var i=0; < frutas.length; i++) {
    console.log( frutas[i])
}

//for in -> não preciso inicializar uma variável de contador do loop
for(var indice in novaListaFrutas){
    console.log(indice + ' - ' + novaListaFrutas[indice])
}
 //Metodo forEach de um vetor percorrer a retorna todos os elementos do vetor
 novaListaFrutas.forEach( fruta =>{
    console.log(fruta)
   } )

   novaListaFrutas.push('Melancia')
   console.log(novaListaFrutas) //['Limão', 'Banana', 'Melancia']

   for(var i=0; i < frutas.length; i++) {
       console.log(frutas[i])
       
   }
   //O metodo forEach - significa para cada item do vetor
   //dentro do parenteses colocamos a variável que irá
   //receber o conteúdo de cada linha do vetor
   //e com o => {} informamos o bloco que irá executar para
   //cada linha
   frutas.forEach ( item => {
    console.log('item pelo forEach' ,item)
   })
   function validarUsuario(login,senha) {
    listaUsuario.for
   }

