



function convertercelsiusparafarenheit(){
    let farenheit;

    let celsius = document.getElementById("celsiusinput").value;

    farenheit = (celsius*9/5) + 32;

    document.getElementById("farenheitoutput").innerHTML = farenheit;


}