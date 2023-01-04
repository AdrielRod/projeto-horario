function carregar(){
    var palavra = document.querySelector("p#horaAtual")
    //Pegando os dados do parágrafo

    var imagem = document.getElementById("imagem")

    var data = new Date()
    //Instanciando o objeto Date

    var hora = data.getHours()
    //Adquirindo o valor das horas

    var foto = document.getElementById("foto")
    //Pegando os dados da foto

    palavra.innerText = (`São exatamente ${hora} horas.`)


    if (hora >= 0 && hora < 12){
        document.getElementById("imagem").src = "imagens/manha.jpg"
        
    }
    else if (hora >= 13 && hora < 17){
        document.getElementById("imagem").src = "imagens/tarde.jpg"
        document.body.style.backgroundColor = "#c2bb5d"
    }
    else{
        document.getElementById("imagem").src = "imagens/noite.jpg"
        document.body.style.backgroundColor = "#4e4e4b"
    }
}