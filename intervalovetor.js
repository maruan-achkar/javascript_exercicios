
vetor = [];
function intervalovetor(){

    let input = document.getElementById("vetorinput").value;
    vetor.push(input);
    input=null;
    vetorinput.value = '';

    document.getElementById("vetoroutput").innerHTML = 'Vetor = ' + vetor.join(", ");
}
function calcularintervalo(){
    let maior = Math.max.apply(vetor, vetor);
    let menor = Math.min.apply(vetor, vetor);

    let intervalovetor = maior-menor;
    document.getElementById("intervalovetoroutput").innerHTML = 'Intervalo = ' + intervalovetor;
}