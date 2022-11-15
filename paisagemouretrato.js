function paisagemouretrato(){
    let largura = document.getElementById("largurainput").value;
    let altura = document.getElementById("alturainput").value;
    

    if(largura>altura){
        document.getElementById("paisagemouretratooutput").innerHTML = 'Paisagem.';
    }
    else if(largura<altura){
        document.getElementById("paisagemouretratooutput").innerHTML = 'Retrato.';
    }
    else{
        document.getElementById("paisagemouretratooutput").innerHTML = 'Quadrado.';
    }
}