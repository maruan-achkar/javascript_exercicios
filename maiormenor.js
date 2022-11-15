
maiormenor = [];
function maiormenoradicionar(){

    let input = document.getElementById("maiormenorinput").value;
    maiormenor.push(input);
    input=null;
    maiormenorinput.value = '';

    document.getElementById("maiormenornumeros").innerHTML = 'Numeros = ' + maiormenor.join(", ");
}

function maiormenorcalcular(){
    let maior = Math.max.apply(maiormenor, maiormenor);
    let menor = Math.min.apply(maiormenor, maiormenor);

    document.getElementById("maiormenoroutput").innerHTML = 'Maior = ' + maior + "<br />" + 'Menor = ' + menor;
} 