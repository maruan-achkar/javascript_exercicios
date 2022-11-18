//provavelmente tem um jeito bem mais facil e curto de fazer isso

let temperaturas = {celsius:null, farenheit:null, kelvin:null}

function celsiusinput(){
    temperaturas.celsius = document.getElementById("convertertemperaturasinputcelsius").value;
    temperaturas.celsius = parseInt(temperaturas.celsius, 10);
    temperaturas.farenheit = (temperaturas.celsius*9/5) + 32;
    temperaturas.kelvin = temperaturas.celsius +  273.15;

    output();
}

function farenheitinput(){
    temperaturas.farenheit = document.getElementById("convertertemperaturasinputfarenheit").value;
    temperaturas.farenheit = parseInt(temperaturas.farenheit, 10);
    temperaturas.celsius = (temperaturas.farenheit - 32) * 5/9;
    temperaturas.kelvin = (temperaturas.farenheit - 32) * 5/9 + 273.15;

    output();
}

function kelvininput(){
    temperaturas.kelvin = document.getElementById("convertertemperaturasinputkelvin").value;
    temperaturas.kelvin = parseInt(temperaturas.kelvin, 10);
    temperaturas.celsius = temperaturas.kelvin -  273.15;
    temperaturas.farenheit = (temperaturas.kelvin - 273.15) * 9/5 + 32;

    output();
}

function output(){
    document.getElementById("convertertemperaturasinputcelsius").value = temperaturas.celsius;
    document.getElementById("convertertemperaturasinputfarenheit").value = temperaturas.farenheit;
    document.getElementById("convertertemperaturasinputkelvin").value = temperaturas.kelvin;
}