function fizzbuzz(){
    let numero = document.getElementById("fizzbuzzinput").value;

    console.log(typeof numero); //ele sempre volta como "string", independente do que eu faca.

    if(numero%3==0 && numero%5==0){
        document.getElementById("fizzbuzzoutput").innerHTML = 'FizzBuzz';
    }
    else if(numero%3==0){
        document.getElementById("fizzbuzzoutput").innerHTML = 'Fizz';
    }
    else if(numero%5==0){
        document.getElementById("fizzbuzzoutput").innerHTML = 'Buzz';
    }
    else{
        document.getElementById("fizzbuzzoutput").innerHTML = numero;
    }

}