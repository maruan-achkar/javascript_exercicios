
function converterfarenheitparacelsius(){
    let celsius;

    let farenheit = document.getElementById("farenheitinput").value;

    celsius = (farenheit - 32) * 5/9;

    document.getElementById("celsiusoutput").innerHTML = celsius;


}