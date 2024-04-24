function carregar(){
    var tempo = new Date()
    var hora = tempo.getHours()

    var imagem = window.document.getElementById("imagem")
    var horario = window.document.getElementById("horario")

    horario.innerHTML = `Agora são ${hora} horas`

    if (hora <= 12){   
        horario.innerHTML += ` Bom dia! :)` 
        imagem.style.backgroundImage = "url(imagens/manha.jpg)"
    }else if (hora > 12 && hora <=18){
        horario.innerHTML += ` Boa Tarde! :)` 
        imagem.style.backgroundImage = "url(imagens/tarde.jpg)"
        //document.body.style.background = "green"
    }else{
        horario.innerHTML += ` Boa Noite :)` 
        imagem.style.backgroundImage = "url(imagens/noite.jpg)"
    }
}