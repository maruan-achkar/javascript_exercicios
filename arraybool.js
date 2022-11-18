let array = [false, 0, undefined, null, "", NaN];

function arraybool(){
    document.getElementById("arraybooloutput").innerHTML = "";
    for(let i=0; i<=array.length; i++){
        document.getElementById("arraybooloutput").innerHTML += "<b>" + array[i] + "</b>" + " = " + !!array[i] + "<br>";
    }
}