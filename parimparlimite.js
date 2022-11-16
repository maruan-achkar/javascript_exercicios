function parimparlimite(){
    let limite = document.getElementById("parimparlimiteinput").value;
    let bool = false;

    document.getElementById("parimparlimiteoutput").innerHTML = '';


    for(let i=0; i<limite; i++){
        bool = !bool;
       
        if(bool == false){
        document.getElementById("parimparlimiteoutput").innerHTML += i + ': Impar<br>';
        }
        else if(bool == true){
        document.getElementById("parimparlimiteoutput").innerHTML += i + ': Par<br>';
        }
    }
    document.getElementById("parimparlimiteoutput").innerHTML += '<u>'+limite+'</u>' + ': <b>Limite</b>';
}