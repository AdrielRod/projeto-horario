var data = new Date()
var hora = data.getHours()
var palavra = document.querySelector("p#horaAtual")
var imagem = document.querySelector("img#imagem")
palavra.innerText = (`São exatamente ${hora} horas.`)

if (hora >= 13){
    imagem.innerText = "tarde"
}