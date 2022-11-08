

function trocarvariaveis(){
    let x = 10;
    let y = 20;
    let temp = 0;

    temp=x;
    x=y;
    y=temp;

    document.getElementById("trocarvariaveis1").innerHTML ='novo x = ' + x;
    document.getElementById("trocarvariaveis2").innerHTML ='novo y = ' + y;
}