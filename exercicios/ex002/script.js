function verificaIdade(){
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = window.document.getElementById("inascimento")
    var res = window.document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] verifique os dados e tente novamente")
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos o ${genero} com ${idade} anos`
    }
}