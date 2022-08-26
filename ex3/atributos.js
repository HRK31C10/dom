function trocarImagem(filename,desenhoname){

    document.querySelector('.imagem').setAttribute('src','images/'+filename)

    document.querySelector('.imagem').setAttribute('data-desenho',desenhoname)
}

function pegarAnimal(){

    let desenho = document.querySelector('.imagem').getAttribute('data-desenho')
    alert("O personagem é "+desenho)

}