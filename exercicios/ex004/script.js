function tabuada(){
    var numero = window.document.getElementById("Inumero")
    var resultado = window.document.getElementById("seltab")

    if(numero.value.length == 0){
        window.alert("Insira um número")
    }else{
        let n = Number(numero.value)
        resultado.innerHTML = "" //Limpando a tabela
        for(let i = 0;i <= 10;i++){
            //*Criando elementos com JavaScript
            let item = document.createElement('option')
            item.text = ` ${n} * ${i} = ${n * i}`
            item.value = `tab${c}` //IMportante indexar para outras linguagens com o PHP
            resultado.appendChild(item)
        }
    }
}