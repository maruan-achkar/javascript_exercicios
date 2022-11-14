
function intervalo(){
    let numero1 = document.getElementById("intervaloinput1").value;
    let numero2 = document.getElementById("intervaloinput2").value;
    let intervalo = 0;
    let maior;
    let menor;
    let igual = 0;

    if(numero1>numero2){
        maior=numero1;
        menor=numero2;
    }
    else if(numero1<numero2){
        maior=numero2;
        menor=numero1;
    }
    else{
        igual = 1;
    }

    if(igual==0){
    for (let i = menor; i < maior; i++) {
        intervalo++;
      }
      document.getElementById("intervalooutput").innerHTML = 'Intervalo = ' + intervalo;
    }
    
    else{
        document.getElementById("intervalooutput").innerHTML = 'Intervalo = 0 pois os numeros sao iguais. ';
    }
    
}