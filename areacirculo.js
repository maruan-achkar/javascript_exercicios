
function areacirculo(){
    let area;

    let raio = document.getElementById("raioinput").value;

    area = Math.PI*raio*raio;

    document.getElementById("areaoutput").innerHTML = area;
}