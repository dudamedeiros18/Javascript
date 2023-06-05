
var  filmes =  [ ]
var  imagens =  [ ]

function  botaoFilmes ( )  {
    var  filmes  =  documento . getElementById ( "nome" ) . valor
    filmes . empurre ( filmes )
    var  foto  =  documento . getElementById ( "imagem" ) . valor
    imagens . empurre ( foto )
    documento . getElementById ( 'resultado' ) . internoHTML  =  ''

    for  ( var  i  em  filmes )  {
    //for (var i = 0; i < filmes.length; i++) {
        documento . getElementById ( 'resultado' ) . HTML interno  +=
            `<div><img src=' ${ imagens [ i ] } ' class='img'> <p> ${ filmes [ i ] } <p><div>`
    }
    documento . getElementById ( "nome" ) . valor  =  ''
    documento . getElementById ( "imagem" ) . valor  =  ''
    documento . getElementById ( "nome" ) . foco ( )
}

function  botaoIndicado ( ) {
    var  nrSorteado  =  parseInt ( Math . random ( )  *  filmes . length )
    documento . getElementById ( 'indicado' ) . HTML interno  = 
        `<div>
            <img src=' ${ imagens [ nrSorteado ] } ' class='img'>
            <p> ${ filmes [ nrSorteado ] } <p>
        </div>`
}




