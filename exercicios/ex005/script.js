
var vetor = []
var resultado = window.document.getElementById("resultado")



function isInList(num){
    for(var i = 0;i < vetor.length;i++){
        if(num == vetor[i]){
            return true
        }
    }return false
}


function isNumero(num){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function adicionar(){
    let numero = window.document.getElementById("Inumero")
    let opcoes = window.document.getElementById("seltab")
    
    if(numero.value.length == 0 || Number(numero.value) < 0 || Number(numero.value > 100)){
        window.alert("Digite um número corretamente")
    }else{
        if(isInList(Number(numero.value)) == true){
            window.alert("Numero ja está na lista")
        }else{
             /*Criando elemento*/
            let item = document.createElement('option')
            item.text = `Número ${Number(numero.value)} adicionado`
            opcoes.appendChild(item)

            vetor.push(Number(numero.value))
            numero.value = ""
            num.focus()
        }


       
    }
}

function maior(){
    var maior = vetor[0]
    var menor = vetor[0]
    for(var i = 0;i < vetor.length;i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
        if(vetor[i] <  menor){
            menor = vetor[i]
        }
    }
    let resposta = [maior,menor]
    return resposta
}

function soma(){
    var s = 0
    for(var i=0;i < vetor.length;i++){
        s += vetor[i]
    }
    return s
}

function media(){
    var m = 0
    for(var i=0;i < vetor.length;i++){
        m += vetor[i]
    }
    return m/vetor.length
}


function finalizar(){
    if(vetor.length == 0){
        alert("Digite um numero")
    }else{   
        resultado.innerHTML = `Foram adicionados ${vetor.length} números\n`
        
        var resposta = maior()
        var s = soma()
        var m = media()
        resultado.innerHTML += `<br>O maior valor informado foi ${resposta[0]}`
        resultado.innerHTML += `<br>O menor valor informado foi ${resposta[1]}`
        resultado.innerHTML += `<br>A soma dos elementos é  ${s}`
        resultado.innerHTML += `<br>A média dos elementos é  ${m}`
    }
}

