var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdcadastro'))
if (listaCadastro == null){
    listaCadastro = []
}


function botaoEntrar(){
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    for (var i in listaCadastro) {
        if(usuario == listaCadastro[i].usuario  && senha == listaCadastro[i].senha){
            alert('achei')
            return true
        }
    }

    alert('nao encontrei')

}