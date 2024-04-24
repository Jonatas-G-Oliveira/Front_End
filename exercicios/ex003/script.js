function contar(){
    let inicio = window.document.getElementById("Iinicio").value
    let fim = window.document.getElementById("Ifim").value
    let passo = window.document.getElementById("Ipasso").value

    let res = window.document.getElementById("resultado")

    if(inicio.length == 0 || passo.length == 0 || fim.length == 0){
        window.alert("[ERRO] faltam dados")
        //res.innerHTML = "Impossível Contar"
    }else{
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(p <= 0){
            window.alert("Passo Invalido,considerando passo 1")
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f;c+=p){
                res.innerHTML += `${c} 👉🏼`
            }
        }else {
            //Contagem Decrescente
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c} 👉🏼`
            }
        }
        res.innerText += `🏁 \u{2705}`;
    }
}