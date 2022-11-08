



function parouimpar(){

    let resultado;

    let parouimpar = document.getElementById("parouimparinput").value;

    resultado = parouimpar % 2;
    

    if(resultado==0){
        document.getElementById("parouimparoutput").innerHTML = 'Par'; 
    }
    else{
        document.getElementById("parouimparoutput").innerHTML = 'Impar'; 
    }




}